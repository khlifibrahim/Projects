# YouTube Playlist Downloader

A robust Python application that downloads YouTube playlists and videos, with built-in error handling and multiple download methods to bypass restrictions.

## Features

- Downloads entire YouTube playlists or individual videos
- Automatically installs required dependencies
- Uses multiple download methods (pytube and yt-dlp) for maximum reliability
- Handles common YouTube download errors and restrictions
- Implements rate limiting to avoid being blocked
- Sanitizes filenames for compatibility with all operating systems

## Requirements

The script will automatically install the required packages, but you can also install them manually:

```bash
pip install pytube yt-dlp
```

## Usage

1. Run the script:

```bash
python index.py
```

2. Enter the YouTube playlist URL when prompted
3. Optionally specify a custom download directory
4. Wait for the download to complete

## How It Works

The downloader uses a two-tier approach to maximize download success:

1. First attempts to download using pytube
2. If pytube fails (e.g., due to restrictions or 403 errors), automatically falls back to yt-dlp
3. Implements random delays between downloads to avoid rate limiting

## Troubleshooting

If you encounter issues:

- Make sure you have a stable internet connection
- Verify that the playlist URL is correct and accessible
- Check if the playlist is private or region-restricted
- Try updating the dependencies: `pip install --upgrade pytube yt-dlp`

## License

This project is open source and available under the MIT License.