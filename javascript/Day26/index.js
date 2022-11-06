var arr = [1, 2, 3, 4, 5];

var isPresent = arr.includes(4);

console.log(isPresent);

var x = 2;

console.log(x);

let y = 3;

console.log(y);

y = 10;

console.log(y);

const z = 4;

console.log(z);

z = 5;

console.log(z);

var a = 2;
function abc() {
  var b = 3;
  if (a < b) {
    let c = 4;
  }
  console.log(a, b, c);
}

abc();

var x = 2;
var p = 3;
function abc() {
  console.log(x + " inner-x");
  p = 4;
  x = 3;
  var y = 3;
  console.log(y);
}
abc();
console.log(y + " outer-y");
