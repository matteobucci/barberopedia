import mongoose, { Document, Schema } from 'mongoose';

export interface IHistoricalReference extends Document {
    name: string;
    description: string;
    startYear: number;
    endYear: number;
}

const HistoricalReferenceSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startYear: { type: Number, required: true },
    endYear: { type: Number }
});

export const HistoricalReference = mongoose.model<IHistoricalReference>('HistoricalReference', HistoricalReferenceSchema);
