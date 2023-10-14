import { IAnalyzedVideo } from '@barberopedia/shared-types';
import mongoose, { Document, Schema } from 'mongoose';

export interface MAnalyzedVideo extends IAnalyzedVideo, Document {}

  const AnalyzedVideoSchema: Schema = new Schema<MAnalyzedVideo>({
    description: { type: String, required: true },
    duration: { type: String, required: true },
    title: { type: String, required: true },
    publishedAt: { type: String, required: true },
    thumbnail: { type: String, required: false },
    channelId: { type: String, required: true },
    channelName: { type: String, required: true },
    lastFetchOn: { type: Date, required: false },
    url: { type: String, required: true },
    videoId: { type: String, required: true },
    commentCount: { type: Number, required: false },
    likeCount: { type: Number, required: false },
    viewCount: { type: Number, required: false }
  });

  export const AnalyzedVideo = mongoose.model<MAnalyzedVideo>('AnalyzedVideo', AnalyzedVideoSchema);
