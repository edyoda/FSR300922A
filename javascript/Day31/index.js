var result = 6;

function sum() {
  console.log(result);
  var two = 2;
  var result = two + two;
  return result;
}

sum();
//undefined

console.log(window.y);
y = 20;

console.log(window.y);

function abc() {
  x = 20;
  var h = 30;
  console.log(x, h);
}

abc();

console.log(window.x);
console.log(h);

var xyz = function (name) {
  console.log("Regular Function " + name);
};

const arrow_function = (name) => {
  console.log("Arrow Function " + name);
};

arrow_function("Ahemad");
xyz("utkarsh");
