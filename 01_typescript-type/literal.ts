// let apple: 'apple' = 'apple';
let apple = 'apple';
apple = 'apple'
// apple = 'hello' // コンパイルエラー

// const orange: 'orange' = 'orange';
const orange = 'orange';


// alternative ENUM
let clothSize: 'small' | 'medium' | 'large' = 'large';

const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}
