import * as _ from "lodash";
import axios from "axios";

import { Post } from "./types";
import { getCharacter } from "./getCharacter";
import { addTwoNumbers } from "./mathUtils";
import {
  getCharacterName,
  getCharacterTitle,
  getCharacterHouse,
} from "./gotUtils";
import greetCharacter from "./gotGreet";
import * as gotDetails from "./gotDetails";

const result = addTwoNumbers(1, 2);
console.log(`The result is: ${result}`);

console.log(getCharacter.fight());

console.log(`Character: ${getCharacterName()}`);
console.log(`Title: ${getCharacterTitle()}`);
console.log(`House: ${getCharacterHouse()}`);

console.log(greetCharacter());

console.log(gotDetails.characterName);
console.log(gotDetails.characterTitle);
console.log(gotDetails.characterHouse);
console.log(gotDetails.greet());
console.log(gotDetails.drinkWine());

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = _.chunk(array, 3);
console.log("Chunked Array:", chunkedArray);

const fetchCharacterData = async (): Promise<void> => {
  try {
    const response = await axios.get<Post[]>(
      "https://anapioficeandfire.com/api/characters/583",
    );
    console.log("Fetched Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchCharacterData();
