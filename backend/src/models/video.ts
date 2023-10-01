import mongoose, { Document, Schema } from 'mongoose';

export interface IVideo extends Document {
  name: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: Date;
  thumbnail: string;
  channelId: string;
  channelName: string;
  commentCount: number;
  likeCount: number;
  viewCount: number;
  lastFetchOn: Date;
  lessons: {
    lessonId: mongoose.Types.ObjectId;
    startTime: number;
    endTime: number;
  }[];
  source: {
    type: 'youtube';
    url: string;
  };
}

const VideoSchema: Schema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  thumbnail: { type: String, required: true },
  channelId: { type: String, required: true },
  channelName: { type: String, required: true },
  url: { type: String, required: true },
  commentCount: { type: Number, required: true },
  likeCount: { type: Number, required: true },
  viewCount: { type: Number, required: true },
  lastFetchOn: { type: Date, required: true },
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

export const Video = mongoose.model<IVideo>('Video', VideoSchema);
