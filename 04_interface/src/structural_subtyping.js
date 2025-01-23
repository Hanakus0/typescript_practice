"use strict";
/* 構造的部分型 */
/* 構造的 */
// type Human = { name: string age: number };
// type Person = { name: string age: number };
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
// フィールドの数は異なるが、DeveloperクラスはHumanインターフェースを満たしている 
//=> 抽象性は左辺の方が高いため代入可能
const user = new Developer('Quill', 38, 3);
const anotherUser = {
    name: 'Quill',
    age: 38,
    greeting(message) {
        console.log(message);
    }
};
// インターフェースに定義されていないプロパティを持つオブジェクトをそのインターフェースの型として扱うことはできない
// なにより右辺はリテラルでインタフェースを継承したクラスではない
// => エクセスプロパティ (excess property)
// const excessUser: Human = {
//   name: 'Quill',
//   age: 38,
//   experience: 38,
//   greeting(message: string) {
//     console.log(message);
//   }
// };
