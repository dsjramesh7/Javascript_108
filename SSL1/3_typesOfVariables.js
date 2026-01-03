// var variable not to use at all mostly
// let const which you should and must only use
{
  var a = 12; //  global scope variable
  let b = 14; // block scope variable
  const c = 24; // block scope variable

  console.log("a =  ", a);
  console.log("b =  ", b);
  console.log("c =  ", c);
}

console.log("a =  ", a);
console.log("b =  ", b);
console.log("c =  ", c);

// var can be redeclared and reinitialized and a global scope
// let cannot be redeclared and but can be reinitialized and a block scope
// const cannot be redeclared and reinitialized and a block scope and also at the time of declaration you need to initialze too.
