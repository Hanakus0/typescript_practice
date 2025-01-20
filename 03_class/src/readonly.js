"use strict";
class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        // this.age += 1;
    }
    show() {
        return this.age;
    }
}
const person4 = new Person4('Quill', 38);
console.log(person4.name);
console.log(person4.show());
