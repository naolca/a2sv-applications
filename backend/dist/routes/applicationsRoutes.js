"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicationsController_1 = __importDefault(require("../controllers/applicationsController"));
const router = express_1.default.Router();
router.post('/textfield', applicationsController_1.default.createTextField);
router.post('/numberfield', applicationsController_1.default.createNumberField);
router.post('/dropdownfield', applicationsController_1.default.createDropDownField);
router.post('/checkboxfield', applicationsController_1.default.createCheckBoxField);
router.post('/radiofield', applicationsController_1.default.createRadioField);
router.get('/inperson', applicationsController_1.default.getFieldsForInpersonApplication);
router.get('/remote', applicationsController_1.default.getFieldsForRemoteApplication);
exports.default = router;
//# sourceMappingURL=applicationsRoutes.js.map