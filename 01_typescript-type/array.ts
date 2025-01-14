// const fruits: string = ['Apple', 'Banana', 'Grape'];
const fruits = ['Apple', 'Banana', 'Grape'];
const strOrNum: (string | number)[] = ['Apple', 'Banana', 'Grape', 123];
const any: any[] = ['Apple', 'Banana', 'Grape', 123];
console.log(person);

// 配列の要素指定
// const book = ['business', 1500, false, 123, 123, 123];
const book: [string, number, boolean] = ['business', 1500, false];
book.push(12345); // pushは処理される
console.log(book);
console.log(book[0]);
console.log(book[1]);
console.log(book[2]);
console.log(book[3]); // ERROR
