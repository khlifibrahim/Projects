import os
import random
import time
from typing import List, Dict, Any

from pytube import Playlist as PytubePlaylist
import yt_dlp

from base_downloader import BaseDownloader
from single_video import SingleVideo


class Playlist(BaseDownloader):
    """Class for downloading YouTube playlists."""
    
    def get_playlist_videos(self, playlist_url: str) -> List[str]:
        """Get all video URLs from a playlist.
        
        Args:
            playlist_url: URL of the playlist
            
        Returns:
            List[str]: List of video URLs
        """
        try:
            print(f"Fetching playlist: {playlist_url}")
            playlist = PytubePlaylist(playlist_url)
            video_urls = list(playlist.video_urls)
            print(f"Found {len(video_urls)} videos in playlist")
            return video_urls
        except Exception as e:
            print(f"Error fetching playlist: {str(e)}")
            # Try alternative method with yt-dlp
            try:
                print("Trying alternative method to fetch playlist...")
                ydl_opts = {'quiet': True, 'extract_flat': True}
                with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                    info = ydl.extract_info(playlist_url, download=False)
                    if 'entries' in info:
                        video_urls = [f"https://www.youtube.com/watch?v={entry['id']}" 
                                     for entry in info['entries'] if entry.get('id')]
                        print(f"Found {len(video_urls)} videos in playlist using yt-dlp")
                        return video_urls
            except Exception as e2:
                print(f"Error with alternative playlist fetching: {str(e2)}")
            return []
    
    def get_playlist_info(self, playlist_url: str) -> Dict[str, Any]:
        """Get playlist information including title.
        
        Args:
            playlist_url: URL of the playlist
            
        Returns:
            Dict with playlist information
        """
        try:
            # Try to get playlist info using yt-dlp
            ydl_opts = {'quiet': True, 'extract_flat': True}
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                info = ydl.extract_info(playlist_url, download=False)
                if info and 'title' in info:
                    return {
                        'title': self._sanitize_filename(info['title']),
                        'id': info.get('id', ''),
                        'uploader': info.get('uploader', '')
                    }
        except Exception as e:
            print(f"Error getting playlist info: {str(e)}")
        
        # Fallback: Use a generic name
        return {'title': 'playlist', 'id': '', 'uploader': ''}
    
    def download(self, playlist_url: str) -> Dict[str, Any]:
        """Download all videos from a playlist.
        
        Args:
            playlist_url: URL of the playlist
            
        Returns:
            Dict with statistics about the download process
        """
        video_urls = self.get_playlist_videos(playlist_url)
        if not video_urls:
            return {"total": 0, "success": 0, "failed": 0, "skipped": 0}
        
        # Get playlist info and create a folder for it
        playlist_info = self.get_playlist_info(playlist_url)
        playlist_folder = os.path.join(self.output_path, playlist_info['title'])
        if not os.path.exists(playlist_folder):
            os.makedirs(playlist_folder)
        
        results = {"total": len(video_urls), "success": 0, "failed": 0, "skipped": 0}
        video_downloader = SingleVideo(output_path=playlist_folder, format_preset=self.format_preset)
        
        for i, video_url in enumerate(video_urls, 1):
            print(f"\nProcessing video {i}/{len(video_urls)}")
            
            # Check if video already exists by getting its title first
            try:
                yt_info = yt_dlp.YoutubeDL({'quiet': True}).extract_info(video_url, download=False)
                if yt_info:
                    video_title = self._sanitize_filename(yt_info.get('title', ''))
                    file_extension = "mp3" if self.format_preset == "audio" else "mp4"
                    potential_file = os.path.join(playlist_folder, f"{video_title}.{file_extension}")
                    
                    if os.path.exists(potential_file):
                        print(f"✓ Video already downloaded: {video_title}")
                        results["skipped"] += 1
                        continue
            except Exception as e:
                print(f"Error checking video existence: {str(e)}")
                # Continue with download attempt if we can't check
            
            print(f"Downloading video {i}/{len(video_urls)}")
            success = video_downloader.download(video_url)
            
            if success:
                results["success"] += 1
            else:
                results["failed"] += 1
            
            # Add a small delay between downloads to avoid rate limiting
            if i < len(video_urls):
                delay = random.uniform(1.0, 3.0)
                print(f"Waiting {delay:.1f} seconds before next download...")
                time.sleep(delay)
        
        return results