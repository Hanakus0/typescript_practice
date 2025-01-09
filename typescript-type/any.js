var user = {
    name: 'Jack',
    age: 21
};
// user.gender = 'male'; // 後から追加不可
//////////////////////////////////
var anything = true;
anything = 123;
anything = "123";
anything = [123, "123"];
// anything = {};
anything.dummy = "dummy";
console.log(anything);
console.log(typeof anything);
console.log(anything[0]);
console.log(anything[1]);
console.log(anything[2]);
console.log(anything.dummy);
console.log(anything.length);
