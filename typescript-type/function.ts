/* return */
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(1, 2);
// add(1, '2');

/* void */
function sayHello(): void {
  console.log('Hello!');
}

sayHello();

/* 関数型 */
// const anotherAdd = add;
const anotherAdd: (n1: number, n2: number) => number = add;
/* 
const anotherAdd2 = function (num1, num2) {
  return num1 + num2;
};
  */
const anotherAdd2: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
  return num1 + num2;
};

/* アロー関数 */
const doubleNumber: (num: number) 
