import { ICharacter } from '@barberopedia/shared-types';
import mongoose, { Schema, Document } from 'mongoose';

export interface MCharacter extends ICharacter, Document {}

const CharacterSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

export const Character = mongoose.model<MCharacter>('Character', CharacterSchema);

