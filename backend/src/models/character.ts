import mongoose, { Schema, Document } from 'mongoose';

export interface ICharacter extends Document {
  name: string;
  description: string;
}

const CharacterSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

export const Character = mongoose.model<ICharacter>('Character', CharacterSchema);

