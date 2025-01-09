// let notUnionType = 10;
// notUnionType = 'hello';


let unionType: number | string = 10;
// unionType.toUppercase();
unionType = 'hello';
unionType.toUpperCase();

let notUnionTypeAry: number | string[] = 10;
notUnionTypeAry = ['hello'];

let unionTypeAry: (number | string)[] = [10, 'string'];
unionTypeAry.push(true);
unionTypeAry.push('pushed');
