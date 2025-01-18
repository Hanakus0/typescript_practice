"use strict";
let implicitAny;
const fn = () => {
    let sample;
    return "did fn()!!!";
};
console.log(fn());
const noUnusedParametersFn = (name, age) => {
    return `Hello ${name}`;
};
console.log(noUnusedParametersFn("Mike", 23));
const noImplicitReturnsFn = (score) => {
    if (score < 70) {
        return "再試験です";
    }
    else if (score > 0) {
        return "合格です";
    }
    return "例外";
};
let score = 69;
console.log(noImplicitReturnsFn(score));
//# sourceMappingURL=compiler.js.map