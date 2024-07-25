export const gotCharacter = {
  name: "Jon Snow",
  title: "King in the North",
  house: "Stark",
  greet: function (): string {
    return `HEllo, I am ${this.name} of house ${this.house}, the ${this.title}`;
  },
  fight: function (): string {
    return `${this.name} fights with valer`;
  },
};
