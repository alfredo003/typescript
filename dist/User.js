"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("./People"));
class User extends People_1.default {
    constructor(name, age, gender, username, password) {
        super(name, age, gender);
        this.id = (Math.random() * 100);
        this.username = username;
        this.password = password;
    }
    profile() {
        return (`
      id:${this.id}
      Username:${this.username}
      Age:${this.age}
      Password:${this.password}
    `);
    }
}
exports.default = User;
