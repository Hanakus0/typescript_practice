class Person {
  name: string;
  // age: number;

  constructor(initName: string) {
    this.name = initName;
    // this.age = 20;
  }

  greeting(this: { name: string }) {
    console.log(`Hello! My name is ${this.name}`);
  }
}

const mike = new Person('Mike');
console.log(mike);
mike.greeting();
