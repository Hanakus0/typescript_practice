class Person1 {
  name: string;

  constructor(initName: string) {
    this.name = initName;
  }

  // greeting(this: { name: string }) {
  greeting(this: Person1) {
    console.log(`Hello! My name is ${this.name}`);
  }
}

const mike = new Person1('Mike');
console.log(mike);
mike.greeting();

// const mike = new Person('Mike');
// console.log(mike);
// mike.greeting();

// const anotherQuill = {
//   name: 'anotherQuill',
//   greeting: quill.greeting
// }
// anotherQuill.greeting();
