"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextFieldModel_1 = __importDefault(require("../Models/TextFieldModel"));
const NumberFieldModel_1 = __importDefault(require("../Models/NumberFieldModel"));
const DropDownFieldModel_1 = __importDefault(require("../Models/DropDownFieldModel"));
const CheckBoxFieldModel_1 = __importDefault(require("../Models/CheckBoxFieldModel"));
const RadioFieldModel_1 = __importDefault(require("../Models/RadioFieldModel"));
class ApplicationsRepository {
    async addTextFieldToForm(textField) {
        const newTextField = new TextFieldModel_1.default(textField);
        newTextField.save();
        return newTextField;
    }
    async addNumberFieldToForm(numberField) {
        const newNumberField = new NumberFieldModel_1.default(numberField);
        newNumberField.save();
        return newNumberField;
    }
    async addDropDownFieldToForm(dropDownField) {
        const newDropDownField = new DropDownFieldModel_1.default(dropDownField);
        newDropDownField.save();
        return newDropDownField;
    }
    async addCheckBoxFieldToForm(checkBoxField) {
        const newCheckBoxField = new CheckBoxFieldModel_1.default(checkBoxField);
        newCheckBoxField.save();
        return newCheckBoxField;
    }
    async addRadioFieldToForm(radioField) {
        const newRadioField = new RadioFieldModel_1.default(radioField);
        newRadioField.save();
        return newRadioField;
    }
    async getFieldsForInpersonApplication() {
        const texts = await TextFieldModel_1.default.find({ forms: { $in: ["IP"] } });
        const numbers = await NumberFieldModel_1.default.find({ forms: { $in: ["IP"] } });
        const dropdowns = await DropDownFieldModel_1.default.find({ forms: { $in: ["IP"] } });
        const checkboxes = await CheckBoxFieldModel_1.default.find({ forms: { $in: ["IP"] } });
        const radios = await RadioFieldModel_1.default.find({ forms: { $in: ["IP"] } });
        const fields = { texts, numbers, dropdowns, checkboxes, radios };
        return fields;
    }
}
exports.default = new ApplicationsRepository();
//# sourceMappingURL=applicationsRepository.js.map