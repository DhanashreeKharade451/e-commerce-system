


 function calculateDiscount(price:number, discountPercentage:number) {
  return (price * discountPercentage) / 100;
}

console.log(calculateDiscount(100, 10)); // 10
const discount = calculateDiscount(200, 15); // 30
console.log(discount);




// export function calculateDiscount(price, discountPercentage) {
//   return (price * discountPercentage) / 100;
// }