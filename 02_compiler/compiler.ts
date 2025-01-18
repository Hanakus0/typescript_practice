// function echo(message: any):string {
//   return message;
// }

let implicitAny;
// implicitAny = 'implicitAny';
// implicitAny.toUpperCase();

// let nullableMessage = null;
// nullableMessage = 'nullableMessage';

// noUnusedLocals
const fn = () =>{
  let sample;
  return "did fn()!!!";
}
console.log(fn());

// noUnusedParameters 
const noUnusedParametersFn = (name: string, age: number): string =>{
  return `Hello ${ name }`;
}
console.log(noUnusedParametersFn("Mike", 23));

// noImplicitReturns 
const noImplicitReturnsFn = (score: number): string =>{
  if(score < 70) {
    return "再試験です";
  } else if(score > 0) {
    return "合格です";
  }
  return "例外";
}

let score = 69;
console.log(noImplicitReturnsFn(score));
