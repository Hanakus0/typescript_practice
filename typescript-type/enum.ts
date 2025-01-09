/* enum を使わない場合 */
// const coffee = {
//   hot: true,
//   size: 'SHORT' // これのタイポが起こりうる
// }

/* enum を使用しない解決策 オブジェクトの利用 */
// const CoffeeSize = {
//   SHORT: 'SHORT',
//   TALL: 'TALL',
//   GRANDE: 'GRANDE',
//   VENTI: 'VENTI'
// }

/* enum を使わない場合 */
// const coffee = {
//   hot: true,
//   size: CoffeeSize.SHORT
// }

/* enum を使用 */
enum CoffeeSizeEnum {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

/* enum を使わない場合 */
const coffeeEnum = {
  hot: true,
  size: CoffeeSizeEnum.SHORT
}
