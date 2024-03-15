import applicationsRepository from "../repository/applicationsRepository";

class ApplicationsService {

   
    
    static async addTextFieldToForm(textField: any) {
        return await applicationsRepository.addTextFieldToForm(textField);
    }
    static async addNumberFieldToForm(numberField: any) {
        return await applicationsRepository.addNumberFieldToForm(numberField);
    }

    static async addDropDownFieldToForm(dropDownField: any) {
        return await applicationsRepository.addDropDownFieldToForm(dropDownField);
    }

    static async addCheckBoxFieldToForm(checkBoxField: any) {
        return await applicationsRepository.addCheckBoxFieldToForm(checkBoxField);
    }

    static async addRadioFieldToForm(radioField: any) {
        return await applicationsRepository.addRadioFieldToForm(radioField);
    }

    static async getFieldsForInpersonApplication() {
        return await applicationsRepository.getFieldsForInpersonApplication();
    }

    static async getFieldsForRemoteApplication() {
        return await applicationsRepository.getFieldsForRemoteApplication();
    }
}

export default ApplicationsService;