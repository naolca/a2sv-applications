import mongoose, { Document, Schema } from 'mongoose';

export interface radioField extends Document {
    label: string;
    choices: string[];
    value: string;
    forms:String[];
}

export const radioFieldSchema = new Schema({
    label: String,
    choices: [String],
    value: {type: String, required: false, default: ""},
    forms: {type:[String], required: false, default: [] }
});

export const radioFieldModel = mongoose.model<radioField>('radioField', radioFieldSchema);

export default radioFieldModel;