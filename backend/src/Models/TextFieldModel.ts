import mongoose, { Document, Schema } from 'mongoose';

export interface TextField extends Document {
    label: string;
    example: string;
    value: string;
    forms: string[];
}

export const TextFieldSchema = new Schema({
    label: String,
    example: String,
    // make the value optional
    value: {type: String, required: false, default: ""},
    forms: {type:[String], required: false, default: [] }
});

export const textFieldModel = mongoose.model<TextField>('TextField', TextFieldSchema);

export default textFieldModel;