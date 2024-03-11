"use strict";
//Importing project dependancies that we installed earlier
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db"));
const applicationsRoutes_1 = __importDefault(require("./routes/applicationsRoutes"));
//Importing .env validation 
//intializing the express app 
const app = (0, express_1.default)();
// make sure to connect to the database
db_1.default;
//using the dependancies
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//using the routes
app.use('/applications', applicationsRoutes_1.default);
//exporting app
exports.default = app;
//# sourceMappingURL=index.js.map