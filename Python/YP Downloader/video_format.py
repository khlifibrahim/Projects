from typing import List

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