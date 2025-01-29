// 以下要素をDOM操作しようとしていると想定
// <input id="input" type="text" />

const input = document.getElementById('input');
// console.log(input.name);
// if(typeof input === 'HTMLElement') {
  //   console.log(input.name);
  // }

const strOrNull = 'ABCDE' as (string | null);
const strVal = strOrNull as string;
console.log(strVal.length);

//////////////////////////////
const assertion1: HTMLInputElement = <HTMLInputElement>document.getElementById('input');
const assertion2: HTMLInputElement = document.getElementById('input') as HTMLInputElement;
console.log(assertion2.name);

