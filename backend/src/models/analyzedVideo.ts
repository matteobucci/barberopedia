import mongoose, { Document, Schema } from 'mongoose';

export interface IAnalyzedVideo extends Document {
    title: string
    description: string
    duration: string
    publishedAt: string
    thumbnail: string
    channelId: string
    channelName: string
    lastFetchOn: Date
    url: string
    commentCount?: number;
    videoId: string;
    likeCount?: number;
    viewCount?: number
  }

  const AnalyzedVideoSchema: Schema = new Schema({
    description: { type: String, required: true },
    duration: { type: String, required: true },
    title: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    thumbnail: { type: String, required: true },
    channelId: { type: String, required: true },
    channelName: { type: String, required: true },
    lastFetchOn: { type: Date, required: false },
    url: { type: String, required: true },
    videoId: { type: String, required: true },
    commentCount: { type: Number, required: false },
    likeCount: { type: Number, required: false },
    viewCount: { type: Number, required: false },
  });

  export const AnalyzedVideo = mongoose.model<IAnalyzedVideo>('AnalyzedVideo', AnalyzedVideoSchema);
