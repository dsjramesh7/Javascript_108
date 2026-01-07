// check if the product is out of stock

// if else
const productItem = 12;
if (productItem === 0) {
  console.log("Product is out of Stock!!!");
} else {
  console.log(`${productItem} products are left `);
}

// if elseif
const grade = 69;
if (grade >= 89) {
  console.log("Grade A");
} else if (grade >= 89) {
  console.log("Grade B");
} else if (grade >= 79) {
  console.log("Grade C");
} else if (grade >= 69) {
  console.log("Grade D");
} else {
  console.log("Enjoy your life");
}

// nested If
const age = 18;
const hasID = false;
if (age >= 18) {
  if (hasID) {
    console.log("You Can Enter to become a Pirate");
  } else {
    console.log("Noope");
  }
} else {
  console.log("Grow Up");
}
