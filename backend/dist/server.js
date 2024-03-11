"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import app from './index.ts';
const index_1 = __importDefault(require("./index"));
/*
  ===============================================================
 Importing the port set on the .env, if the port number is not set on .env or the port is being used by another server
running on the local macchine we are asking the app to use 3000 as the port number
  ===============================================================
*/
const PORT = process.env.PORT || 8080;
//Listing to the app and running it on PORT 5000
index_1.default.listen(PORT, async () => {
    console.log(`listen on port ${PORT}`);
});
index_1.default.get('/', (req, res) => {
    res.send('Hello! world');
});
//# sourceMappingURL=server.js.map