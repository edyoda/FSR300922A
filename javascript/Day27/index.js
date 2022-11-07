let k = 2;

function abc() {
  let p = 3;
  k = 4;
  if (p < k) {
    let h = 5;
    console.log(h, p, k);
  }
  console.log(h);
}
console.log(k);
abc();

/*
  var variables are functional scope variables
  let variables are block scoper variables.
*/

console.log(hoist);
var hoist = "value";

myFunction();
let p = 3;
function myFunction() {
  console.log("hello", p);
}

myFunction();

var myFunction = function () {
  console.log("hello");
};

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

a();

b();

function a() {
  console.log("Hello");
}
var x = function () {
  console.log("Bye");
};

var a = 4;

var g = 6;

console.log(a, g);

/* write your logic to swap values of two variables */

console.log(a, g); //6,4

var a = 4;
var j = 6;

console.log(a, j);
c = a;
a = j;
j = c;
console.log(a, j);

/* write your logic to swap values of two variables without using third variable */

a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
