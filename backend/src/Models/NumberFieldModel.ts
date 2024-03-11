import mongoose, { Document, Schema } from 'mongoose';

export interface NumberField extends Document {
    label: string;
    example: number;
    value: number;
    forms: string[];
}

export const NumberFieldSchema = new Schema({
    label: String,
    example: Number,
    value: {type: Number, required: false},
    forms: {type:[String], required: false, default: [] }
});

export const numberFieldModel = mongoose.model<NumberField>('NumberField', NumberFieldSchema);

export default numberFieldModel;