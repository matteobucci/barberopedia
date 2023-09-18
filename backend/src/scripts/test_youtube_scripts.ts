import { google } from 'googleapis';
import { YoutubeVideoImporter } from 'services/youtube-populator';

// Set up the YouTube API client
const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY,
});

// Define the channel ID and the number of videos to fetch
const channelId = 'UCOhGl4NRM_l9FWiANhWvdzQ';
const playlistId = "PLRXAqLAy6ZPolrZLNe_2wCuUbG8FDwyAF"
const maxResults = 10;

const videoImporter = new YoutubeVideoImporter(process.env.YOUTUBE_API_KEY as string);

// List all videos of a playlist
const playListResponse = await youtube.playlistItems.list({
    part: ['id', 'snippet',],
    playlistId: playlistId,
    maxResults: maxResults,
});

const items = playListResponse.data.items;

if(items){

    for(let item of items){

        const videoId = item.snippet?.resourceId?.videoId;

        const videoData = await videoImporter.importVideoById(videoId as string);

        console.log(videoData);
        
    }
    
}