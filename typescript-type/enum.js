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
var CoffeeSizeEnum;
(function (CoffeeSizeEnum) {
    CoffeeSizeEnum["SHORT"] = "SHORT";
    CoffeeSizeEnum["TALL"] = "TALL";
    CoffeeSizeEnum["GRANDE"] = "GRANDE";
    CoffeeSizeEnum["VENTI"] = "VENTI";
})(CoffeeSizeEnum || (CoffeeSizeEnum = {}));
/* enum を使わない場合 */
var coffeeEnum = {
    hot: true,
    size: CoffeeSizeEnum.SHORT
};
