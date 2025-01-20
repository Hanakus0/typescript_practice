"use strict";
class Person6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
    // get personName(){
    get personName() {
        return 'Mr.' + this.name;
    }
    // set personName(name: string){
    set personName(age) {
        this.age = age;
    }
}
const nick = new Person6('Nick', 55);
console.log(nick);
nick.greeting();
console.log(nick.personName);
// nick.personName = 'Nick2';
nick.personName = 110;
