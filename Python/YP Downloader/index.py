import os
import sys
import time
from typing import List, Dict, Any, Optional, Tuple
import re
import random

try:
    from pytube import YouTube, Playlist, Stream
    from pytube.exceptions import PytubeError
except ImportError:
    print("Installing required packages...")
    os.system("pip install pytube")
    from pytube import YouTube, Playlist, Stream
    from pytube.exceptions import PytubeError

try:
    import yt_dlp
except ImportError:
    print("Installing required packages...")
    os.system("pip install yt-dlp")
    import yt_dlp


class VideoFormat:
    """Class to represent video format options."""
    # Common format presets
    HIGHEST = "highest"
    LOWEST = "lowest"
    AUDIO_ONLY = "audio"
    MP4_720P = "720p"
    MP4_1080P = "1080p"
    MP4_360P = "360p"
    MP4_480P = "480p"
    
    @staticmethod
    def get_available_formats() -> List[str]:
        """Return a list of available format presets."""
        return [
            VideoFormat.HIGHEST,
            VideoFormat.LOWEST,
            VideoFormat.AUDIO_ONLY,
            VideoFormat.MP4_720P,
            VideoFormat.MP4_1080P,
            VideoFormat.MP4_360P,
            VideoFormat.MP4_480P
        ]
    
    @staticmethod
    def get_format_description(format_preset: str) -> str:
        """Return a description of the format preset."""
        descriptions = {
            VideoFormat.HIGHEST: "Highest available resolution",
            VideoFormat.LOWEST: "Lowest available resolution (saves bandwidth)",
            VideoFormat.AUDIO_ONLY: "Audio only (MP3)",
            VideoFormat.MP4_720P: "MP4 video at 720p",
            VideoFormat.MP4_1080P: "MP4 video at 1080p",
            VideoFormat.MP4_360P: "MP4 video at 360p",
            VideoFormat.MP4_480P: "MP4 video at 480p"
        }
        return descriptions.get(format_preset, "Unknown format")


class BaseDownloader:
    """Base class for YouTube downloaders."""
    def __init__(self, output_path: str = None, format_preset: str = VideoFormat.HIGHEST):
        """Initialize the base downloader.
        
        Args:
            output_path: Directory where videos will be saved. Defaults to current directory.
            format_preset: Format preset to use for downloads.
        """
        self.output_path = output_path or os.path.join(os.getcwd(), "downloads")
        self.format_preset = format_preset
        
        if not os.path.exists(self.output_path):
            os.makedirs(self.output_path)
        
        # Configure yt-dlp options
        self.ydl_opts = self._configure_ytdlp_options()
    
    def _configure_ytdlp_options(self) -> Dict[str, Any]:
        """Configure yt-dlp options based on format preset."""
        format_string = 'best'  # Default
        
        if self.format_preset == VideoFormat.AUDIO_ONLY:
            format_string = 'bestaudio/best'
            return {
                'format': format_string,
                'outtmpl': os.path.join(self.output_path, '%(title)s.%(ext)s'),
                'noplaylist': True,
                'quiet': False,
                'no_warnings': False,
                'postprocessors': [{
                    'key': 'FFmpegExtractAudio',
                    'preferredcodec': 'mp3',
                    'preferredquality': '192',
                }],
            }
        elif self.format_preset == VideoFormat.LOWEST:
            format_string = 'worst'
        elif self.format_preset == VideoFormat.MP4_360P:
            format_string = 'bestvideo[height<=360][ext=mp4]+bestaudio[ext=m4a]/best[height<=360][ext=mp4]/best[height<=360]'
        elif self.format_preset == VideoFormat.MP4_480P:
            format_string = 'bestvideo[height<=480][ext=mp4]+bestaudio[ext=m4a]/best[height<=480][ext=mp4]/best[height<=480]'
        elif self.format_preset == VideoFormat.MP4_720P:
            format_string = 'bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]/best[height<=720][ext=mp4]/best[height<=720]'
        elif self.format_preset == VideoFormat.MP4_1080P:
            format_string = 'bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]/best[height<=1080]'
        
        return {
            'format': format_string,
            'outtmpl': os.path.join(self.output_path, '%(title)s.%(ext)s'),
            'noplaylist': True,
            'quiet': False,
            'no_warnings': False,
        }
    
    def _sanitize_filename(self, filename: str) -> str:
        """Remove invalid characters from filename."""
        return re.sub(r'[\\/*?:"<>|]', "", filename)
    
    def _get_pytube_stream(self, yt: YouTube) -> Stream:
        """Get the appropriate stream based on format preset."""
        if self.format_preset == VideoFormat.AUDIO_ONLY:
            return yt.streams.get_audio_only()
        elif self.format_preset == VideoFormat.LOWEST:
            return yt.streams.get_lowest_resolution()
        elif self.format_preset == VideoFormat.MP4_360P:
            return yt.streams.filter(res="360p", file_extension="mp4").first() or yt.streams.get_highest_resolution()
        elif self.format_preset == VideoFormat.MP4_480P:
            return yt.streams.filter(res="480p", file_extension="mp4").first() or yt.streams.get_highest_resolution()
        elif self.format_preset == VideoFormat.MP4_720P:
            return yt.streams.filter(res="720p", file_extension="mp4").first() or yt.streams.get_highest_resolution()
        elif self.format_preset == VideoFormat.MP4_1080P:
            return yt.streams.filter(res="1080p", file_extension="mp4").first() or yt.streams.get_highest_resolution()
        else:  # Default to highest
            return yt.streams.get_highest_resolution()


class SingleVideo(BaseDownloader):
    """Class for downloading a single YouTube video."""
    
    def download_with_pytube(self, video_url: str) -> bool:
        """Download a video using pytube.
        
        Args:
            video_url: URL of the video to download
            
        Returns:
            bool: True if download was successful, False otherwise
        """
        try:
            print(f"Downloading {video_url} with pytube...")
            yt = YouTube(video_url)
            video = self._get_pytube_stream(yt)
            
            if not video:
                print(f"× No suitable stream found for format {self.format_preset}")
                return False
                
            filename = self._sanitize_filename(yt.title)
            file_extension = "mp3" if self.format_preset == VideoFormat.AUDIO_ONLY else "mp4"
            output_filename = f"{filename}.{file_extension}"
            
            video.download(output_path=self.output_path, filename=output_filename)
            print(f"✓ Downloaded: {yt.title} ({video.resolution if hasattr(video, 'resolution') else 'audio'})")
            return True
        except PytubeError as e:
            print(f"× Pytube error: {str(e)}")
            return False
        except Exception as e:
            print(f"× Unexpected error with pytube: {str(e)}")
            return False
    
    def download_with_ytdlp(self, video_url: str) -> bool:
        """Download a video using yt-dlp.
        
        Args:
            video_url: URL of the video to download
            
        Returns:
            bool: True if download was successful, False otherwise
        """
        try:
            print(f"Downloading {video_url} with yt-dlp...")
            with yt_dlp.YoutubeDL(self.ydl_opts) as ydl:
                ydl.download([video_url])
            print(f"✓ Downloaded video using yt-dlp with format: {self.format_preset}")
            return True
        except Exception as e:
            print(f"× yt-dlp error: {str(e)}")
            return False
    
    def download(self, video_url: str) -> bool:
        """Try to download a video using multiple methods.
        
        Args:
            video_url: URL of the video to download
            
        Returns:
            bool: True if any download method was successful, False otherwise
        """
        # First try with pytube
        if self.download_with_pytube(video_url):
            return True
        
        # If pytube fails, try with yt-dlp
        print("Retrying with alternative downloader...")
        if self.download_with_ytdlp(video_url):
            return True
        
        print(f"Failed to download {video_url} with all methods")
        return False


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
            playlist = Playlist(playlist_url)
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
    
    def download(self, playlist_url: str) -> Dict[str, Any]:
        """Download all videos from a playlist.
        
        Args:
            playlist_url: URL of the playlist
            
        Returns:
            Dict with statistics about the download process
        """
        video_urls = self.get_playlist_videos(playlist_url)
        if not video_urls:
            return {"total": 0, "success": 0, "failed": 0}
        
        results = {"total": len(video_urls), "success": 0, "failed": 0}
        video_downloader = SingleVideo(output_path=self.output_path, format_preset=self.format_preset)
        
        for i, video_url in enumerate(video_urls, 1):
            print(f"\nDownloading video {i}/{len(video_urls)}")
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


def display_format_options():
    """Display available format options to the user."""
    print("\nAvailable format options:")
    for i, format_preset in enumerate(VideoFormat.get_available_formats(), 1):
        print(f"{i}. {format_preset} - {VideoFormat.get_format_description(format_preset)}")


def get_user_format_choice() -> str:
    """Get format choice from user."""
    display_format_options()
    
    while True:
        try:
            choice = input("\nSelect format (number): ")
            if not choice.strip():
                return VideoFormat.HIGHEST  # Default
            
            choice_idx = int(choice) - 1
            formats = VideoFormat.get_available_formats()
            
            if 0 <= choice_idx < len(formats):
                return formats[choice_idx]
            else:
                print("Invalid choice. Please try again.")
        except ValueError:
            print("Please enter a valid number.")


def main():
    print("===== YouTube Downloader =====\n")
    
    # Determine if we're downloading a single video or a playlist
    download_type = input("What do you want to download? (1: Single Video, 2: Playlist): ")
    
    if download_type not in ["1", "2"]:
        print("Invalid choice. Exiting.")
        return
    
    # Get URL from user
    if download_type == "1":
        url = input("Enter YouTube video URL: ")
        if not url:
            print("No URL provided. Exiting.")
            return
    else:  # Playlist
        url = input("Enter YouTube playlist URL: ")
        if not url:
            print("No URL provided. Exiting.")
            return
    
    # Get output directory (optional)
    output_dir = input("Enter output directory (leave empty for default): ")
    
    # Get format choice from user
    format_preset = get_user_format_choice()
    print(f"Selected format: {format_preset} - {VideoFormat.get_format_description(format_preset)}")
    
    # Initialize downloader based on type
    if download_type == "1":
        # Single video download
        downloader = SingleVideo(output_path=output_dir if output_dir else None, format_preset=format_preset)
        print("\nStarting download...")
        start_time = time.time()
        success = downloader.download(url)
        elapsed_time = time.time() - start_time
        
        # Print summary
        print("\n===== Download Summary =====")
        print(f"Status: {'Success' if success else 'Failed'}")
        print(f"Time elapsed: {elapsed_time:.1f} seconds")
        print(f"Download saved to: {downloader.output_path}")
    else:
        # Playlist download
        downloader = Playlist(output_path=output_dir if output_dir else None, format_preset=format_preset)
        print("\nStarting download...")
        start_time = time.time()
        results = downloader.download(url)
        elapsed_time = time.time() - start_time
        
        # Print summary
        print("\n===== Download Summary =====")
        print(f"Total videos: {results['total']}")
        print(f"Successfully downloaded: {results['success']}")
        print(f"Failed: {results['failed']}")
        print(f"Time elapsed: {elapsed_time:.1f} seconds")
        print(f"Downloads saved to: {downloader.output_path}")