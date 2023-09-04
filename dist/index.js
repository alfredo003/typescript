"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const pessoa = (new User_1.default("Alfredo", 21, "M", "alfredo03", "1234"));
console.log(pessoa.profile());
