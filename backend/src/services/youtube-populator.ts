import { google, youtube_v3 } from 'googleapis';
import { AnalyzedVideo, IAnalyzedVideo } from 'models/analyzedVideo';

export class YoutubeVideoImporter {

    private youtube;

    constructor(apiKey: string) {
        this.youtube = google.youtube({
            version: 'v3',
            auth: apiKey,
        });
    }

    async importVideoById(videoId: string): Promise<IAnalyzedVideo> {
        const response = await this.youtube.videos.list({
            part: ['snippet','contentDetails'],
            id: [videoId]
        });

        if (response?.data?.items?.length === 0) {
            throw new Error('No video found');
        } else {
            const video = response.data.items && response.data.items[0] as youtube_v3.Schema$Video;

            if (video) {
                const title = video.snippet?.title as string;
                const description = video.snippet?.description as string;
                const duration = video.contentDetails?.duration as string;
                const publishedAt = video.snippet?.publishedAt as string;
                const thumbnail = video.snippet?.thumbnails?.default?.url as string;
                const channelId = video.snippet?.channelId as string;
                const channelName = video.snippet?.channelTitle as string;
                const lastFetchOn = new Date();
                const url = `https://www.youtube.com/watch?v=${videoId}`;
                const commentCount = Number.parseInt(video.statistics?.commentCount || "0" as string);
                const likeCount = Number.parseInt(video.statistics?.likeCount || "0" as string);
                const viewCount = Number.parseInt(video.statistics?.viewCount || "0" as string);

                return new AnalyzedVideo({
                    title,
                    description,
                    duration, // Es. PT1H9M1S
                    publishedAt,
                    thumbnail,
                    channelId,
                    channelName,
                    videoId: videoId,
                    lastFetchOn,
                    url,
                    likeCount,
                    commentCount,
                    viewCount
                });

            }else{
                throw new Error('No video found');
            }
        }
    }



}