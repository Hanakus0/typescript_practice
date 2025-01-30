function toUpperCaseVal(x: string): string; // オーバーロード
function toUpperCaseVal(x: number): number; // オーバーロード
function toUpperCaseVal(x: string): number; // 返り値は異なるオーバーロード
function toUpperCaseVal(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}

/* 
 * 以下のような「明らかに文字列」であるにも関わらず、型アサーションをしないとナローイングできない
 * 型が似たような処理にもかかわらず全てに型アサーションをするのは手間
*/
// let upperHello = toUpperCaseVal('hello');
// let upperBye = toUpperCaseVal('bye');
// let upperYeah = toUpperCaseVal('yeah');
// let upperNumber = toUpperCaseVal(123);
// console.log(upperHello, upperBye, upperYeah, upperNumber);
// // 型アサーション
// upperHello = toUpperCaseVal('hello') as string;
// upperBye = toUpperCaseVal('bye') as string;
// upperYeah = toUpperCaseVal('yeah') as string;
// upperNumber = toUpperCaseVal(123) as number;
// console.log(upperHello, upperBye, upperYeah, upperNumber);


/* 
 * オーバーロード適用 
 * 型アサーションが不要となり、関数側で返り値のデータ型明示されるためナローイングとなる
*/
const upperHello = toUpperCaseVal('hello');
const upperBye = toUpperCaseVal('bye');
const upperYeah = toUpperCaseVal('yeah');
const upperNumber = toUpperCaseVal(123);
console.log(upperHello, upperBye, upperYeah, upperNumber);
