"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    myData() {
        return (`
    Name:${this.name}
    Age:${this.age}
    Gender:${this.gender}
    `);
    }
}
exports.default = People;
