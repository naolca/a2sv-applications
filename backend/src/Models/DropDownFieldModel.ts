import mongoose, { Document, Schema } from 'mongoose';

export interface dropdownField extends Document {
    label: string;
    choices: string[];
    value: string;
   forms:String[]; 
}

export const dropdownFieldSchema = new Schema({
    label: String,
    choices: [String],
    value: {type: String, required: false, default: ""},
    forms: {type:[String], required: false, default: [] }
});

export const dropdownFieldModel = mongoose.model<dropdownField>('dropdownField', dropdownFieldSchema);

export default dropdownFieldModel;