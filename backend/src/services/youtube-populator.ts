import { google, youtube_v3 } from 'googleapis';


export interface BasicVideoInfo {
    title: string;
    description: string;
    duration: string;
    publishedAt: string;
    thumbnail: string;
}

export class YoutubeVideoImporter {

    private youtube;

    constructor(apiKey: string) {
        this.youtube = google.youtube({
            version: 'v3',
            auth: apiKey,
        });
    }

    async importVideoById(videoId: string): Promise<BasicVideoInfo> {
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

                return {
                    title,
                    description,
                    duration, // Es. PT1H9M1S
                    publishedAt,
                    thumbnail,
                };

            }else{
                throw new Error('No video found');
            }
        }
    }



}