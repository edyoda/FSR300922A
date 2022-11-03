var name; // undefined

var lastName = null;

var name = "Utkarsh";
var index = name.indexOf("z");
console.log(index);
if (index != -1) {
  console.log("has z");
} else {
  console.log("not z");
}

var input = parseInt(window.prompt("Please enter a number"));

console.log(input);

if (input < 20) {
  console.log("xs");
} else if (input >= 20 && input < 50) {
  console.log("small");
} else if (input >= 50 && input < 75) {
  console.log("md");
} else if (input >= 75 && input < 100) {
  console.log("lg");
} else {
  console.log("xl");
}

var char = parseInt(window.prompt("Please enter a character"));

console.log(char);

switch (char) {
  case "a":
    console.log("I am a");
    break;
  case "b":
    console.log("I am b");
    break;
  case "c":
    console.log("I am c");
    break;
  default:
    console.log("Nothing");
}

var n = 23;
console.log(n);
switch (n % 2 == 0) {
  case true:
    console.log("even");
    break;
  default:
    console.log("odd");
}

var n = 20;

var result = n % 2 == 0 ? "even" : "odd";
console.log(result);

//falsy value
// 0, null, undefined, "", false

if (null) {
  console.log("true");
} else {
  console.log("false");
}

var number = 1;

var result = Boolean(number);
var result = String(number);
var result = Number(number);

console.log(result);

var x = 20;

x += 30;
x -= 20;
x *= 2;
console.log(x);
