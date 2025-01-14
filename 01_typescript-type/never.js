function error(message) {
    throw new Error(message);
}
console.log(error('This is an error!!'));
var err2 = function (message) {
    throw new Error(message);
};
console.log(err2('This is an error2!!'));
var cry = function (animal) {
    switch (animal) {
        case 'Dog':
            console.log('ワン！');
            break;
        case 'Cat':
            console.log('ニャー！');
            break;
        case 'Bird':
            console.log('ニャー！');
            break;
        default:
            var exhaustivenessCheck = animal;
            // NG: Type 'string' is not assignable to type 'never'.
            break;
    }
};
