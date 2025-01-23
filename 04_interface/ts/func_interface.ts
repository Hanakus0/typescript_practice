// typeでの関数の型定義
type addFunc = (num1: number, num2: number) => number;
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

// interfaceでの関数定義
interface addFuncInterface {
  (num1: number, num2: number): number;
}


