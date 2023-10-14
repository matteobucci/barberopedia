import mongoose, { Document, Schema } from 'mongoose';
import { IVideo } from '@barberopedia/shared-types';

export interface MVideo extends IVideo, Document {}

const VideoSchema: Schema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  thumbnail: { type: String, required: true },
  channelId: { type: String, required: true },
  videoId: { type: String, required: true },
  channelName: { type: String, required: true },
  commentCount: { type: Number, required: true },
  likeCount: { type: Number, required: true },
  viewCount: { type: Number, required: true },
  lastFetchOn: { type: Date, required: true },
  updatedAt: { type: Date, required: false },
  createdAt: { type: Date, required: false },
  createdBy: { type: String, required: false },
  updatedBy: { type: String, required: false },
  lessons: [{
    lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
    startTime: { type: Number },
    endTime: { type: Number }
  }],
  source: {
    type: { type: String, required: true },
    url: { type: String, required: true }
  }
});

export const Video = mongoose.model<MVideo>('Video', VideoSchema);
