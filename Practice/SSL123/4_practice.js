// C4 : arithemtic operation through input two
// const a = Number(prompt("Enter a First Number: "));
// const b = Number(prompt("Enter a Second Number: "));
// console.log("Addition Result: ", a + b);
// console.log("Subscription Result: ", a - b);
// console.log("Multiplication Result: ", a * b);
// console.log("Division Result: ", a / b);

//C5: chain assignment operators same value
let a = (b = c = 14);
console.log(a);
console.log(b);
console.log(c);

//C6: even or odd
let q = 27;
const result = q % 2 === 0 ? "q is an even number" : "q is an odd number";
console.log(result);

//C7: range between 10 and 20
let numberInRange = 24;
const result2 =
  numberInRange >= 10 && numberInRange <= 20
    ? "number in range"
    : "number not in range";
console.log(result2);
