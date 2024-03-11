import { Request, Response } from 'express';
import ApplicationsService from '../services/applicationsService';
import { MyUserRequest } from '../config/definitions/MyRequest';


class ApplicationsController {
    

    static async createTextField(req: MyUserRequest, res: Response) {
        try {
            const { formType } = req.body;
            const textField = await ApplicationsService.addTextFieldToForm(req.body );
            res.status(201).json(textField);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    static async createNumberField(req: MyUserRequest, res: Response) {
        try {
            const numberField = await ApplicationsService.addNumberFieldToForm(req.body);
            res.status(201).json(numberField);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createDropDownField(req: MyUserRequest, res: Response) {
        try {
            const dropDownField = await ApplicationsService.addDropDownFieldToForm(req.body);
            res.status(201).json(dropDownField);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createCheckBoxField(req: MyUserRequest, res: Response) {
        try {
            const checkBoxField = await ApplicationsService.addCheckBoxFieldToForm(req.body);
            res.status(201).json(checkBoxField);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createRadioField(req: MyUserRequest, res: Response) {
        try {
            const radioField = await ApplicationsService.addRadioFieldToForm(req.body);
            res.status(201).json(radioField);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getFieldsForInpersonApplication(req: MyUserRequest, res: Response) {
        try {
            const fields = await ApplicationsService.getFieldsForInpersonApplication();
            res.status(200).json(fields);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ApplicationsController;