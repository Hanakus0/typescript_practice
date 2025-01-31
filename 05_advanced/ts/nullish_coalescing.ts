interface DownloadedUserData  {
    id: number;
    name: string;
    age?: number;
    hasRole?: boolean;
    gender?: string;
    grade?: number;
}

const downloadedUserData: DownloadedUserData = {
    id: 1,
    name: 'Alice',
    // age: 20,
    hasRole: false,
    gender: '',
    grade: 0,
};

// Optional chaining
console.log(downloadedUserData.age?.toString());

// Nullish coalescing operator
let userAge = downloadedUserData.age ?? 'no-user';
console.log(userAge); //=> no-user
let hasRole = downloadedUserData.hasRole ?? 'no-user';
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
let userHasRole: (boolean | string) = downloadedUserData.hasRole || 'no-role';
console.log(userHasRole); //=> no-role

userHasRole = downloadedUserData.hasRole ?? 'no-role';
console.log(userHasRole); //=> false

// ''（空文字）
let userGender = downloadedUserData.gender || 'no-gender';
console.log(userGender); //=> no-gender

userGender = downloadedUserData.gender ?? 'no-gender';
console.log(userGender); //=> ''

// 0
let userGrade = downloadedUserData.grade || 'no-grade';
console.log(userGrade); //=> no-grade

userGrade = downloadedUserData.grade ?? 'no-grade';
console.log(userGrade); //=> 0
