"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterHouse = exports.characterTitle = exports.characterName = void 0;
exports.greet = greet;
exports.drinkWine = drinkWine;
exports.characterName = "Tyrion Lannister";
exports.characterTitle = "Hand of the King";
exports.characterHouse = "Lannister";
function greet() {
    return `Hello, I am ${exports.characterName} of House ${exports.characterHouse}, the ${exports.characterTitle}.`;
}
function drinkWine() {
    return `${exports.characterName} is enjoying a glass of wine.`;
}
