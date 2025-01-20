class Person6 {
  constructor(public name: string, public age: number) {
  }

  greeting(this: Person1) {
    console.log(`Hello! My name is ${this.name}`);
  }

  // get personName(){
  get personName():string{
    return 'Mr.' + this.name;
  }

  // set personName(name: string){
  set personName(age: number){
    this.age = age;
  }
}

const nick = new Person6('Nick', 55);
console.log(nick);
nick.greeting();
console.log(nick.personName);
// nick.personName = 'Nick2';
nick.personName = 110;
