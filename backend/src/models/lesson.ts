import mongoose, { Document, Schema } from 'mongoose';

export interface ILesson extends Document {
    name: string;
    description: string;
    mainCharacter: mongoose.Types.ObjectId;
    secondaryCharacters: mongoose.Types.ObjectId[];
    historicalReferences: mongoose.Types.ObjectId[];
}

const LessonSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    mainCharacter: { type: Schema.Types.ObjectId, ref: 'Character' },
    secondaryCharacters: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
    historicalReferences: [{ type: Schema.Types.ObjectId, ref: 'HistoricalReference' }]
});

export const Lesson = mongoose.model<ILesson>('Lesson', LessonSchema);
