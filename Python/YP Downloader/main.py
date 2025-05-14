import os
import sys
import time

from video_format import VideoFormat
from single_video import SingleVideo
from playlist import Playlist


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
        print(f"Skipped (already downloaded): {results.get('skipped', 0)}")
        print(f"Failed: {results['failed']}")
        print(f"Time elapsed: {elapsed_time:.1f} seconds")
        print(f"Downloads saved to: {downloader.output_path}")


if __name__ == "__main__":
    main()