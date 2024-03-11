"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applicationsService_1 = __importDefault(require("../services/applicationsService"));
class ApplicationsController {
    static async createTextField(req, res) {
        try {
            const { formType } = req.body;
            const textField = await applicationsService_1.default.addTextFieldToForm(req.body);
            res.status(201).json(textField);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async createNumberField(req, res) {
        try {
            const numberField = await applicationsService_1.default.addNumberFieldToForm(req.body);
            res.status(201).json(numberField);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async createDropDownField(req, res) {
        try {
            const dropDownField = await applicationsService_1.default.addDropDownFieldToForm(req.body);
            res.status(201).json(dropDownField);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async createCheckBoxField(req, res) {
        try {
            const checkBoxField = await applicationsService_1.default.addCheckBoxFieldToForm(req.body);
            res.status(201).json(checkBoxField);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async createRadioField(req, res) {
        try {
            const radioField = await applicationsService_1.default.addRadioFieldToForm(req.body);
            res.status(201).json(radioField);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async getFieldsForInpersonApplication(req, res) {
        try {
            const fields = await applicationsService_1.default.getFieldsForInpersonApplication();
            res.status(200).json(fields);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.default = ApplicationsController;
//# sourceMappingURL=applicationsController.js.map