"use strict";
var _a, _b, _c, _d, _e, _f;
const downloadedUserData = {
    id: 1,
    name: 'Alice',
    // age: 20,
    hasRole: false,
    gender: '',
    grade: 0,
};
// Optional chaining
console.log((_a = downloadedUserData.age) === null || _a === void 0 ? void 0 : _a.toString());
// Nullish coalescing operator
let userAge = (_b = downloadedUserData.age) !== null && _b !== void 0 ? _b : 'no-user';
console.log(userAge); //=> no-user
let hasRole = (_c = downloadedUserData.hasRole) !== null && _c !== void 0 ? _c : 'no-user';
console.log(hasRole); //=> no-user
//////////////////////////////////
/* OR演算子との違い
 * null、undefinedは同じく検知できる
 *
 */
userAge = downloadedUserData.age || 'no-user';
console.log(userAge);
/* ただし 空文字 や 0 の検知には違いが出る
 * `||` は falsy な値を検知する
 * `??` は null か undefined だけを検知する
 */
// ''（空文字）
let userHasRole = downloadedUserData.hasRole || 'no-role';
console.log(userHasRole); //=> no-role
userHasRole = (_d = downloadedUserData.hasRole) !== null && _d !== void 0 ? _d : 'no-role';
console.log(userHasRole); //=> false
// ''（空文字）
let userGender = downloadedUserData.gender || 'no-gender';
console.log(userGender); //=> no-gender
userGender = (_e = downloadedUserData.gender) !== null && _e !== void 0 ? _e : 'no-gender';
console.log(userGender); //=> ''
// 0
let userGrade = downloadedUserData.grade || 'no-grade';
console.log(userGrade); //=> no-grade
userGrade = (_f = downloadedUserData.grade) !== null && _f !== void 0 ? _f : 'no-grade';
console.log(userGrade); //=> 0
