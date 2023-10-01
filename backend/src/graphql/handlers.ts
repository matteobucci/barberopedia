import { AnalyzedVideo, IAnalyzedVideo } from "models/analyzedVideo";
import { Video } from "models/video";
import { YoutubeVideoImporter } from "services/youtube-populator";


export const analyzeYoutubeVideo = async (url: string): Promise<IAnalyzedVideo|null> => {
   
    if (!url) return null;

    const videoId = retrieveUrlId(url);
    if(!videoId) return null;

    const videoImporter = new YoutubeVideoImporter(process.env.YOUTUBE_API_KEY as string);
   
    console.log(`Analyzing video ${url}`)

    const cachedVideo = await AnalyzedVideo.findOne({ 'url': url });

    if (cachedVideo) {
      console.log(`Video ${cachedVideo.title} retrieved from cache`);
      return cachedVideo;
    }

    console.log(`Video ${url} not found in cache, importing from youtube`);

    const data: IAnalyzedVideo = await videoImporter.importVideoById(videoId);

    console.log(JSON.stringify(data));

    await data.save();

    console.log(`Video ${data.title} imported from youtube`);

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