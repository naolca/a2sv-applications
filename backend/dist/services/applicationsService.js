"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applicationsRepository_1 = __importDefault(require("../repository/applicationsRepository"));
class ApplicationsService {
    static async addTextFieldToForm(textField) {
        return await applicationsRepository_1.default.addTextFieldToForm(textField);
    }
    static async addNumberFieldToForm(numberField) {
        return await applicationsRepository_1.default.addNumberFieldToForm(numberField);
    }
    static async addDropDownFieldToForm(dropDownField) {
        return await applicationsRepository_1.default.addDropDownFieldToForm(dropDownField);
    }
    static async addCheckBoxFieldToForm(checkBoxField) {
        return await applicationsRepository_1.default.addCheckBoxFieldToForm(checkBoxField);
    }
    static async addRadioFieldToForm(radioField) {
        return await applicationsRepository_1.default.addRadioFieldToForm(radioField);
    }
    static async getFieldsForInpersonApplication() {
        return await applicationsRepository_1.default.getFieldsForInpersonApplication();
    }
}
exports.default = ApplicationsService;
//# sourceMappingURL=applicationsService.js.map