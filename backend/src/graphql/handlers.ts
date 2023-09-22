import { BasicVideoInfo, YoutubeVideoImporter } from "services/youtube-populator";



export interface AnalyzeUrlArgs { source: string; args: any; context: any; info: any; }

export const analyzeYoutubeVideo = async ({source, args, context, info }: AnalyzeUrlArgs): Promise<BasicVideoInfo|null> => {
   
    const url = args.url;
    if (!url) return null;

    const videoId = retrieveUrlId(url);
    if(!videoId) return null;

    const videoImporter = new YoutubeVideoImporter(process.env.YOUTUBE_API_KEY as string);
   
    const data = await videoImporter.importVideoById(videoId);

    return data;
    
  }
  
function retrieveUrlId(url: string): string{
    
  const urlParts = url.split('v=');
    if (urlParts.length < 2) return "";
    
    let videoId = urlParts[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    return videoId;
  }