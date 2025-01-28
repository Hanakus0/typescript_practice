"use strict";
// 上2つのインタフェースを継承している関係で、Humanインターフェースを満たすクラスはname, age, greetingを持つ
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const anotherUser = new Developer('Quill', 38, 3);
