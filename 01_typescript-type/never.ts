function error(message: string) {
  throw new Error(message)
}
console.log(error('This is an error!!'));

const err2 = (message: string) => {
  throw new Error(message)
}
console.log(err2('This is an error2!!'));

///////////////////////////////////////////////

type Animal = 'Dog' | 'Cat' | 'Bird';

const cry = (animal: Animal) => {
  switch(animal) {
    case 'Dog':
      console.log('ワン！')
      break;
    case 'Cat':
      console.log('ニャー！')
      break;
    case 'Bird':
      console.log('ニャー！')
      break;
    default:
      const exhaustivenessCheck: never = animal;
      // NG: Type 'string' is not assignable to type 'never'.
      break;
  }
}
