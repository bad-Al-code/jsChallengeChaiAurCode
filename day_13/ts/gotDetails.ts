export const characterName = "Tyrion Lannister";
export const characterTitle = "Hand of the King";
export const characterHouse = "Lannister";

export function greet(): string {
  return `Hello, I am ${characterName} of House ${characterHouse}, the ${characterTitle}.`;
}

export function drinkWine(): string {
  return `${characterName} is enjoying a glass of wine.`;
}
