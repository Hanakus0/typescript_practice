class Person4 {

  constructor(public name: string, private readonly age: number) {
  }

  incrementAge() {
    // this.age += 1;
  }

  show(): number {
    return this.age;
  }
}

const person4 = new Person4('Quill', 38);
console.log(person4.name);
console.log(person4.show());
