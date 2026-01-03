// C1: product of 3 quantity and discount of 10
let itemPrice = 271;
let quantity = 3;
let discountedPrice = 0.1;

let Total = itemPrice * quantity;
let discountPrice = Total * discountedPrice;
let priceAfterDiscount = Total - discountPrice;
console.log("total: ", Total);
console.log("discountedTotalPrice: ", discountPrice);
console.log("priceAfterDiscount: ", priceAfterDiscount);
