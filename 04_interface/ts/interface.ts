/* いままでの使い方 */
// type Human = {
//   name: string;
//   age: number;
// }

// const human: Human = {
//   name: 'Quill',
//   age: 38
// }

// let developer: Human;

/*******************/
interface Human {
  name: string;
  age: number;
  greeting: (message: string) => void;
  // greeting(message: string): void;
}

const human: Human = {
  name: 'Quill',
  age: 38,
  greeting(message: string): void {
    console.log(message);
  }
}

let developer: Human;
