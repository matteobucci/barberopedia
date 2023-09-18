import mongoose, { Document, Schema } from 'mongoose';

export interface IVideo extends Document {
  name: string;
  description: string;
  duration: number;
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
  description: { type: String, required: true },
  duration: { type: Number, required: true },
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
