var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.firstName, firstName = _c === void 0 ? "Jon" : _c, _d = _b.lastName, lastName = _d === void 0 ? "Snow" : _d, _e = _b.age, age = _e === void 0 ? 20 : _e;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("My name is ".concat(this.firstName, " ").concat(this.lastName, "."));
    };
    Person.prototype.updateAge = function (newAge) {
        this.age = newAge;
        console.log("The updated age is: ".concat(this.age));
    };
    Person.greetMessage = function () {
        console.log("Hello, this message is from the static greet method.");
    };
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        set: function (name) {
            var _a = name.split(" "), firstName = _a[0], lastName = _a[1];
            this.firstName = firstName;
            this.lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(_a) {
        var _b = _a === void 0 ? {} : _a, firstName = _b.firstName, lastName = _b.lastName, age = _b.age, _c = _b.studentId, studentId = _c === void 0 ? "89f0a178-19a8-4ea0-a1ea-097c953dbedd" : _c;
        var _this = _super.call(this, { firstName: firstName, lastName: lastName, age: age }) || this;
        _this.studentId = studentId;
        Student.studentCount += 1;
        console.log("Total number of students: ".concat(Student.studentCount));
        return _this;
    }
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    Student.prototype.greet = function () {
        console.log("My name is ".concat(this.firstName, " ").concat(this.lastName, ". Student ID is: ").concat(this.studentId, "."));
    };
    Student.studentCount = 0;
    return Student;
}(Person));
var Account = /** @class */ (function () {
    function Account(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.balance = initialBalance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited: ".concat(amount, ". New balance: ").concat(this.balance));
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrew: ".concat(amount, ". New balance: ").concat(this.balance));
        }
        else if (amount > this.balance) {
            console.log("Insufficient funds.");
        }
        else {
            console.log("Withdrawal amount must be positive.");
        }
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
// Test cases
var person = new Person();
person.greet();
person.updateAge(25);
console.log("Full name: ".concat(person.fullName));
var student = new Student({ firstName: "Arya", lastName: "Stark", age: 18 });
console.log("Student ID: ".concat(student.getStudentId()));
student.greet();
Person.greetMessage();
var anotherStudent = new Student({
    firstName: "Sansa",
    lastName: "Stark",
    age: 20,
});
console.log("Student ID: ".concat(anotherStudent.getStudentId()));
anotherStudent.greet();
console.log("Total number of students: ".concat(Student.studentCount));
var anotherPerson = new Person({
    firstName: "Tyrion",
    lastName: "Lannister",
});
console.log("Full name: ".concat(anotherPerson.fullName));
anotherPerson.fullName = "Daenerys Targaryen";
console.log("Updated full name: ".concat(anotherPerson.fullName));
var myAccount = new Account(100);
console.log("Initial balance: ".concat(myAccount.getBalance()));
myAccount.deposit(50);
console.log("Balance after deposit: ".concat(myAccount.getBalance()));
myAccount.withdraw(30);
console.log("Balance after withdrawal: ".concat(myAccount.getBalance()));
myAccount.withdraw(150);
console.log("Balance after attempting to withdraw more than balance: ".concat(myAccount.getBalance()));
myAccount.deposit(-20); // Invalid deposit
console.log("Balance after invalid deposit: ".concat(myAccount.getBalance()));
myAccount.withdraw(-10); // Invalid withdrawal
console.log("Balance after invalid withdrawal: ".concat(myAccount.getBalance()));
