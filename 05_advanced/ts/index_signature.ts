interface Desiner {
  name: string;
  [index: string]: string;
}
const designer: Desiner = {
  name: 'John',
  // 以下name意外のプロパティを際限なく追加可能
  role: 'UI/UX',
  experience: '5 years',
  country: 'USA',
};
