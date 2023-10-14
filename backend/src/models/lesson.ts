import mongoose, { Document, Schema } from 'mongoose';
import { ILesson } from "@barberopedia/shared-types"


export interface MLesson extends ILesson, Document {
    mainCharacter: mongoose.Types.ObjectId;
    secondaryCharacters: mongoose.Types.ObjectId[];
    historicalReferences: mongoose.Types.ObjectId[];
}

const LessonSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    mainPictureUrl: { type: String, required: true },
    tags: [{ type: String }],
    lessonCreatedOn: { type: Date, required: true },
    eventName: { type: String, required: false },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: false },
    mainCharacter: { type: Schema.Types.ObjectId, ref: 'Character' },
    secondaryCharacters: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
    historicalReferences: [{ type: Schema.Types.ObjectId, ref: 'HistoricalReference' }]
});

export const Lesson = mongoose.model<MLesson>('Lesson', LessonSchema);
