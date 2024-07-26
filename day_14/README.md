# Day 14: Classes

## Overview

In this exercise, we explored TypeScript classes and interfaces, demonstrating how to define and implement classes with various features such as inheritance, static methods, getters, setters, and error handling.

## Tasks/Activities

1. **Interfaces**

- IPerson Interface: Defines the structure for a Person with methods and properties related to a person’s details and actions.
- IStudent Interface: Extends IPerson to include student-specific details and actions.
- IAccount Interface: Defines methods for basic account operations like deposit, withdraw, and checking balance.

2. **Classes**

- Person Class: Implements the IPerson interface and includes:
  - Properties: firstName, lastName, age
  - Methods: greet(), updateAge()
  - Static Method: greetMessage()
  - Getter and Setter: fullName
  - Student Class: Inherits from Person and implements IStudent:
  - Additional Property: studentId
  - Method: getStudentId()
  - Overridden Method: greet()
  - Static Property: studentCount
- Account Class: Implements the IAccount interface:
  - Property: balance
  - Methods: deposit(), withdraw(), getBalance()

3. **Test Cases**

- Person Tests: Created instances of Person to test greeting, age updates, and full name operations.
- Student Tests: Created instances of Student to test student ID retrieval and personalized greeting.
- Account Tests: Created an Account instance to test deposit, withdrawal, and balance checking functionalities.
