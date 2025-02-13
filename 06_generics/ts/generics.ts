function copy(value: any) {
  return value;
}

console.log(copy('hello'));

// オブジェクトなどの場合に面倒
console.log((copy({ name: 'Quill' }) as { name: string }));

// 'T'が一般的に用いられるTypeの意味
function genericsCopy<T>(value: T): T {
  return value;
}

// オブジェクトなどの場合に面倒
console.log((genericsCopy<string>('hello')));
