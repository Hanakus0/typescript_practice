"use strict";
// 以下要素をDOM操作しようとしていると想定
// <input id="input" type="text" />
const input = document.getElementById('input');
// console.log(input.name);
// if(typeof input === 'HTMLElement') {
//   console.log(input.name);
// }
const strOrNull = 'ABCDE';
const strVal = strOrNull;
console.log(strVal.length);
//////////////////////////////
const assertion1 = document.getElementById('input');
const assertion2 = document.getElementById('input');
console.log(assertion2.name);
