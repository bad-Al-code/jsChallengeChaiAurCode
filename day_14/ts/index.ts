interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  greet(): void;
  updateAge(newAge: number): void;
  fullName: string;
}

interface IStudent extends IPerson {
  studentId: string;
  getStudentId(): string;
  greet(): void;
}

interface IAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  getBalance(): number;
}

interface PersonConstructorParams {
  firstName?: string;
  lastName?: string;
  age?: number;
}

interface StudentConstructorParams extends PersonConstructorParams {
  studentId?: string;
}

class Person implements IPerson {
  firstName: string;
  lastName: string;
  age: number;

  constructor({
    firstName = "Jon",
    lastName = "Snow",
    age = 20,
  }: PersonConstructorParams = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet(): void {
    console.log(`My name is ${this.firstName} ${this.lastName}.`);
  }

  updateAge(newAge: number): void {
    this.age = newAge;
    console.log(`The updated age is: ${this.age}`);
  }

  static greetMessage(): void {
    console.log(`Hello, this message is from the static greet method.`);
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name: string) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person implements IStudent {
  static studentCount: number = 0;
  studentId: string;

  constructor({
    firstName,
    lastName,
    age,
    studentId = "89f0a178-19a8-4ea0-a1ea-097c953dbedd",
  }: StudentConstructorParams = {}) {
    super({ firstName, lastName, age });
    this.studentId = studentId;
    Student.studentCount += 1;
    console.log(`Total number of students: ${Student.studentCount}`);
  }

  getStudentId(): string {
    return this.studentId;
  }

  greet(): void {
    console.log(
      `My name is ${this.firstName} ${this.lastName}. Student ID is: ${this.studentId}.`,
    );
  }
}

class Account implements IAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
    } else if (amount > this.balance) {
      console.log("Insufficient funds.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

// Test cases

const person = new Person();
person.greet();
person.updateAge(25);
console.log(`Full name: ${person.fullName}`);

const student = new Student({ firstName: "Arya", lastName: "Stark", age: 18 });
console.log(`Student ID: ${student.getStudentId()}`);
student.greet();

Person.greetMessage();

const anotherStudent = new Student({
  firstName: "Sansa",
  lastName: "Stark",
  age: 20,
});
console.log(`Student ID: ${anotherStudent.getStudentId()}`);
anotherStudent.greet();

console.log(`Total number of students: ${Student.studentCount}`);

const anotherPerson = new Person({
  firstName: "Tyrion",
  lastName: "Lannister",
});
console.log(`Full name: ${anotherPerson.fullName}`);

anotherPerson.fullName = "Daenerys Targaryen";
console.log(`Updated full name: ${anotherPerson.fullName}`);

const myAccount = new Account(100);
console.log(`Initial balance: ${myAccount.getBalance()}`);

myAccount.deposit(50);
console.log(`Balance after deposit: ${myAccount.getBalance()}`);

myAccount.withdraw(30);
console.log(`Balance after withdrawal: ${myAccount.getBalance()}`);

myAccount.withdraw(150);
console.log(
  `Balance after attempting to withdraw more than balance: ${myAccount.getBalance()}`,
);

myAccount.deposit(-20); // Invalid deposit
console.log(`Balance after invalid deposit: ${myAccount.getBalance()}`);

myAccount.withdraw(-10); // Invalid withdrawal
console.log(`Balance after invalid withdrawal: ${myAccount.getBalance()}`);
