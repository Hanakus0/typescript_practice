/* 構造的部分型 */
/* 構造的 */
// type Human = { name: string age: number };
// type Person = { name: string age: number };

/* 部分型 */
// let message: string = 'hello';
// let mix: string | number = message;

/////////////////////////////////
interface Human {
  name: string;
  age: number;
  greeting: (message: string) => void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string) {
    console.log(message);
  }
}

// フィールドの数は異なるが、DeveloperクラスはHumanインターフェースを満たしている 
//=> 抽象性は左辺の方が高いため代入可能
const user: Human = new Developer('Quill', 38, 3);

// const anotherUser: Human = {
//   name: 'Quill',
//   age: 38,
//   greeting(message: string) {
//     console.log(message);
//   }
// };
// 
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
