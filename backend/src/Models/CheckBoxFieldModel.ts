
import mongoose, { Document, Schema } from 'mongoose';

export interface checkboxField extends Document {
    label: string;
    choices: string[];
    value: string[];
    forms: string[];
}

export const checkboxFieldSchema = new Schema({
    label: String,
    choices: [String],
    value: {type:[String], required: false, default: []},
    forms: {type:[String], required: false, default: [] }
    
});


export const checkboxFieldModel = mongoose.model<checkboxField>('checkboxField', checkboxFieldSchema);

export default checkboxFieldModel;