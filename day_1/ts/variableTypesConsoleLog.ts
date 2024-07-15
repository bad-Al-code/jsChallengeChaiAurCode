var aNumber: number = 1;
console.log(aNumber);

let aString: string = "chaiAurCode";
console.log(aString);

const aBoolean: boolean = false;
console.log(aBoolean);

let aArray: number[] = [1, 2, 3];
let aObject: { name: string } = {
  name: "Alice",
};

console.log(typeof aNumber); // "number"
console.log(typeof aString); // "string"
console.log(typeof aBoolean); // "boolean"
console.log(typeof aObject); // "object"
console.log(typeof aArray); // "object"

console.log(Array.isArray(aArray)); // true
