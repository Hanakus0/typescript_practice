"use strict";
class Person2 {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}
// let person: Person;
const john = new Person2('John', 38);
console.log(john);
john.incrementAge(); //=> 39
// john.age = 100; //=> 100
john.greeting();
