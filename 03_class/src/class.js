"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
        this.age = 20;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
const mike = new Person('Mike');
console.log(mike);
mike.greeting();
