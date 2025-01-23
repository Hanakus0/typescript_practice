// nameだけを制約
interface Nameable {
  name: string;
}

// 多重継承確認用
interface hoge {
}

// age、greetingを制約
interface Human extends Nameable, hoge {
  age: number;
  greeting: (message: string) => void;
}

// 上2つのインタフェースを継承している関係で、Humanインターフェースを満たすクラスはname, age, greetingを持つ
class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string) {
    console.log(message);
  }
}

const anotherUser: Human = new Developer('Quill', 38, 3);
