let i = 0;

while (i < 3) {
  //0<3
  console.log(i);
  i++;
}
console.log("End");

do {
  console.log(i);
  i++;
} while (i < 3); //1<3
console.log("End");

function my_function() {
  console.log("Hello I am Function");
}

my_function();
function my_function(name, age) {
  console.log("Hello I am" + " " + name + ", " + age);
}

my_function("Utkarsh", 24);

function printTable(value) {
  let count = 1;

  while (count <= 10) {
    let answer = count * value;
    console.log(value + " * " + count + " = " + answer);
    count++;
  }
}

let x = 2;

printTable(x);
printTable(y);
printTable(4);
printTable(5);
printTable(20);
printTable(12);

function fun(x, y, z = 10) {
  console.log(x, y, z);
}

fun(2, 3);

fun(2, 3, 4);

function getSum(x, y, z) {
  let sum = x + y + z;
  return sum;
}

const result = getSum(2, 3, 4);

console.log(result);

function xyz() {
  console.log("Utkarsh");
}

function abc(x) {
  console.log(x);
  xyz();
}

abc(2);

let z = 2;

function abc(my_function) {
  const name = my_function();
  console.log(name);
}

function xyz() {
  return "Utkarsh";
}

abc(xyz);
