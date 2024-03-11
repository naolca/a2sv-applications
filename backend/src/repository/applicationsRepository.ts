
import textFieldModel from '../Models/TextFieldModel';
import numberFieldModel from '../Models/NumberFieldModel';
import dropdownFieldModel from '../Models/DropDownFieldModel';
import checkboxFieldModel from '../Models/CheckBoxFieldModel';
import radioFieldModel from '../Models/RadioFieldModel';


class ApplicationsRepository {
   


    async addTextFieldToForm(textField: any) {
        const newTextField = new textFieldModel(textField);
        newTextField.save();
        return newTextField;
    }
    async addNumberFieldToForm(numberField: any) {
        const newNumberField = new numberFieldModel(numberField);
        newNumberField.save();
        return newNumberField;
    }

    async addDropDownFieldToForm(dropDownField: any) {
        const newDropDownField = new dropdownFieldModel(dropDownField);
        newDropDownField.save();
        return newDropDownField;
    }

    async addCheckBoxFieldToForm(checkBoxField: any) {
        const newCheckBoxField = new checkboxFieldModel(checkBoxField);
        newCheckBoxField.save();
        return newCheckBoxField;
    }

    async addRadioFieldToForm(radioField: any) {
        const newRadioField = new radioFieldModel(radioField);
        newRadioField.save();
        return newRadioField;
    }

    async getFieldsForInpersonApplication() {
  

        const texts = await textFieldModel.find({ forms: { $in: ["IP"] } });
        const numbers = await numberFieldModel.find({ forms: { $in: ["IP"] } });
        const dropdowns = await dropdownFieldModel.find({ forms: { $in: ["IP"] } });
        const checkboxes = await checkboxFieldModel.find({ forms: { $in: ["IP"] } });
        const radios = await radioFieldModel.find({ forms: { $in: ["IP"] } });
        const fields = {texts, numbers, dropdowns, checkboxes, radios };
        return fields;

    }
}


export default new ApplicationsRepository();
