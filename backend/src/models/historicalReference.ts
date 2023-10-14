import { IHistoricalReference } from '@barberopedia/shared-types';
import mongoose, { Document, Schema } from 'mongoose';

export interface MHistoricalReference extends IHistoricalReference, Document {}

const HistoricalReferenceSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startYear: { type: Number, required: true },
    endYear: { type: Number }
});

export const HistoricalReference = mongoose.model<MHistoricalReference>('HistoricalReference', HistoricalReferenceSchema);
