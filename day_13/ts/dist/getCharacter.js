"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacter = void 0;
exports.getCharacter = {
    name: "Jon Snow",
    title: "King in the North",
    house: "Stark",
    greet: function () {
        return `HEllo, I am ${this.name} of house ${this.house}, the ${this.title}`;
    },
    fight: function () {
        return `${this.name} fights with valer`;
    },
};
