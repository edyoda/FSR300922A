typeof 3;
("number");
typeof "abc";
("string");
typeof true;
("boolean");
typeof {};
("object");
typeof null;
("object");
typeof [];
("object");
typeof undefined;
("undefined");

var x = 10;

x = 23;

var obj = {
  name: "utkarsh",
};

var infinite = Infinity;

var not_a_number = NaN;

typeof NaN;
// ("number");
NaN == NaN;
// false;
NaN === NaN;
// false;
null === null;
// true;
null == null;
// true;
undefined === undefined;
//true

isNaN(NaN);
true;
isNaN(2);
false;
isNaN("3");

isFinite(Infinity);
false;
isFinite(2);
true;

var name = "Utkarsh Gupta";

var x = 10;
var y = 20;

var sum = x + y;

console.log(name, sum);

console.log(0 / 0);
// NaN

console.log("b" + 4);

console.log("utkarsh" + " " + "Gupta");

var number = 10;

var float = 99.38;

console.log(float.toString());

var three = parseInt("3");

console.log(typeof three);

console.log(parseInt("a"));
//NaN

console.log(parseFloat("3.4"));

var x = 123.5;

console.log(x.toFixed());
var x = 123.5732;

console.log(x.toFixed(3));

var firstName = 'I love "JavaScript"';

console.log(firstName);

var text = "I love JavaScript";

console.log(text.toUpperCase());
console.log(text.toLowerCase());

var text = "I love";

var js = "Javascript";

console.log(text + " " + js);

var result = text.concat(" ", js);

console.log(result);

text.trim();
console.log(text.charAt(5));

console.log(text.split("_"));

console.log(text.split(" "));

console.log(text.length);
console.log(text.indexOf("h")); //-1
console.log(text.indexOf("v", 5)); // starting position
console.log(text.lastIndexOf("v"));
console.log(text.slice(2, -2));
