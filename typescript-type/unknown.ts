let unknownInput: unknown;
let anyInput: any;
let text: string;

unknownInput = 21;
unknownInput = true;
unknownInput = 'hello';


// text = unknownInput; // コンパイルエラー

// データ型が String 型であることが保証される
if (typeof unknownInput === 'string') {
  text = unknownInput;
}
