class Person3 {
  // name: string;
  // private age: number;

  constructor(public name: string, private age: number) {
    // this.name = initName;
    // this.age = initAge;
  }

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person3) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

// let person: Person;
const onill = new Person3('Onill', 38);
console.log(onill);
onill.incrementAge();
onill.greeting();
