from typing import Dict, Any

from pytube import YouTube
from pytube.exceptions import PytubeError
import yt_dlp

from base_downloader import BaseDownloader
from video_format import VideoFormat


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
            error_str = str(e)
            if "ffmpeg is not installed" in error_str:
                print("× Error: ffmpeg is not installed, which is required for this format.")
                print("  The downloader is using a fallback format that doesn't require ffmpeg.")
                
                # Try again with a modified format that doesn't require ffmpeg
                try:
                    # Temporarily modify options to use a format that doesn't need merging
                    original_opts = self.ydl_opts.copy()
                    
                    # Use a simpler format string that doesn't require merging
                    if self.format_preset in [VideoFormat.MP4_360P, VideoFormat.MP4_480P, 
                                             VideoFormat.MP4_720P, VideoFormat.MP4_1080P]:
                        height = self._get_height_for_preset(self.format_preset)
                        self.ydl_opts['format'] = f'best[height<={height}][ext=mp4]/best[ext=mp4]/best'
                    else:
                        self.ydl_opts['format'] = 'best[ext=mp4]/best'
                    
                    with yt_dlp.YoutubeDL(self.ydl_opts) as ydl:
                        ydl.download([video_url])
                    print(f"✓ Downloaded video using yt-dlp with fallback format")
                    
                    # Restore original options
                    self.ydl_opts = original_opts
                    return True
                except Exception as e2:
                    print(f"× yt-dlp error with fallback format: {str(e2)}")
                    # Restore original options
                    self.ydl_opts = original_opts
                    return False
            else:
                print(f"× yt-dlp error: {error_str}")
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