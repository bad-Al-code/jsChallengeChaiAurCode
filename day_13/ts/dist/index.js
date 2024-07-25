"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const axios_1 = __importDefault(require("axios"));
const getCharacter_1 = require("./getCharacter");
const mathUtils_1 = require("./mathUtils");
const gotUtils_1 = require("./gotUtils");
const gotGreet_1 = __importDefault(require("./gotGreet"));
const gotDetails = __importStar(require("./gotDetails"));
const result = (0, mathUtils_1.addTwoNumbers)(1, 2);
console.log(`The result is: ${result}`);
console.log(getCharacter_1.getCharacter.fight());
console.log(`Character: ${(0, gotUtils_1.getCharacterName)()}`);
console.log(`Title: ${(0, gotUtils_1.getCharacterTitle)()}`);
console.log(`House: ${(0, gotUtils_1.getCharacterHouse)()}`);
console.log((0, gotGreet_1.default)());
console.log(gotDetails.characterName);
console.log(gotDetails.characterTitle);
console.log(gotDetails.characterHouse);
console.log(gotDetails.greet());
console.log(gotDetails.drinkWine());
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = _.chunk(array, 3);
console.log("Chunked Array:", chunkedArray);
const fetchCharacterData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get("https://anapioficeandfire.com/api/characters/583");
        console.log("Fetched Data:", response.data);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
});
fetchCharacterData();
