import express from 'express';
import ApplicationsController from '../controllers/applicationsController';

const router = express.Router();

router.post('/textfield', ApplicationsController.createTextField);
router.post('/numberfield', ApplicationsController.createNumberField);
router.post('/dropdownfield', ApplicationsController.createDropDownField);
router.post('/checkboxfield', ApplicationsController.createCheckBoxField);
router.post('/radiofield', ApplicationsController.createRadioField);
router.get('/inperson', ApplicationsController.getFieldsForInpersonApplication);
router.get('/remote', ApplicationsController.getFieldsForRemoteApplication);

export default router;