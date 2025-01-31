"use strict";
var _a;
const downloadedData = {
    id: 1,
    name: 'Alice'
};
// Optional chaining
console.log((_a = downloadedData.age) === null || _a === void 0 ? void 0 : _a.toString());
// Nullish coalescing operator
// const userName = downloadedData.age ?? 'no-user';
// console.log(userName.toString());
