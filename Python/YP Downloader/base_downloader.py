import os
import re
import subprocess
import sys
from typing import Dict, Any, Tuple

from pytube import YouTube, Stream
import yt_dlp

from video_format import VideoFormat


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
        
        # Check for ffmpeg installation
        self.ffmpeg_available = self._check_ffmpeg()
        if not self.ffmpeg_available:
            print("Warning: ffmpeg is not installed. Some video formats may not be available.")
            print("The downloader will use fallback formats that don't require ffmpeg.")
        
        # Configure yt-dlp options
        self.ydl_opts = self._configure_ytdlp_options()
    
    def _check_ffmpeg(self) -> bool:
        """Check if ffmpeg is installed and available in the system path."""
        try:
            # Use subprocess to check if ffmpeg is available
            with open(os.devnull, 'w') as devnull:
                subprocess.check_call(['ffmpeg', '-version'], stdout=devnull, stderr=devnull)
            return True
        except (subprocess.SubprocessError, FileNotFoundError):
            return False
    
    def _install_ffmpeg(self) -> bool:
        """Attempt to install ffmpeg."""
        try:
            print("Attempting to install ffmpeg...")
            if sys.platform.startswith('win'):
                # Windows installation
                subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'ffmpeg-python'])
                print("Note: You may still need to install the ffmpeg binaries manually.")
                print("Visit https://ffmpeg.org/download.html for more information.")
            else:
                # Unix-like systems
                if sys.platform.startswith('darwin'):  # macOS
                    subprocess.check_call(['brew', 'install', 'ffmpeg'])
                else:  # Linux
                    subprocess.check_call(['apt-get', 'update'])
                    subprocess.check_call(['apt-get', 'install', '-y', 'ffmpeg'])
            return self._check_ffmpeg()
        except Exception as e:
            print(f"Failed to install ffmpeg: {str(e)}")
            return False
    
    def _configure_ytdlp_options(self) -> Dict[str, Any]:
        """Configure yt-dlp options based on format preset and ffmpeg availability."""
        format_string = 'best'  # Default
        
        # If ffmpeg is not available, use formats that don't require merging
        if not self.ffmpeg_available:
            if self.format_preset == VideoFormat.AUDIO_ONLY:
                format_string = 'bestaudio[ext=m4a]/bestaudio'
                return {
                    'format': format_string,
                    'outtmpl': os.path.join(self.output_path, '%(title)s.%(ext)s'),
                    'noplaylist': True,
                    'quiet': False,
                    'no_warnings': False,
                }
            elif self.format_preset == VideoFormat.LOWEST:
                format_string = 'worst[ext=mp4]/worst'
            elif self.format_preset in [VideoFormat.MP4_360P, VideoFormat.MP4_480P, 
                                       VideoFormat.MP4_720P, VideoFormat.MP4_1080P]:
                # Use a single stream format that doesn't require merging
                format_string = f'best[ext=mp4][height<={self._get_height_for_preset(self.format_preset)}]/best[ext=mp4]/best'
            else:  # Default to best available single stream
                format_string = 'best[ext=mp4]/best'
        else:
            # With ffmpeg available, we can use the original format strings
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
    
    def _get_height_for_preset(self, format_preset: str) -> int:
        """Get the height value for a given format preset."""
        height_map = {
            VideoFormat.MP4_360P: 360,
            VideoFormat.MP4_480P: 480,
            VideoFormat.MP4_720P: 720,
            VideoFormat.MP4_1080P: 1080
        }
        return height_map.get(format_preset, 1080)  # Default to 1080 if not found
    
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