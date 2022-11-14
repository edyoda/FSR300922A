// Regular function vs Arrow Function
//Es5 & Es6
//Syntax
//Argumnet Binding
//New keyword
//This Keyword

function abc(a, b) {
  return a + b;
}

const abc = (a, b) => a + b;

function xyz(x, y) {
  console.log(arguments);
}

xyz(1, 2, 3, 4, 5, 5, 6);

const xyz = (a, b) => {
  console.log(arguments); // it will give us error.
};

xyz(1, 2, 3, 4, 5, 5, 6);

function Person() {
  return "I am a Person";
}

const obj = new Person();

const Person = () => {
  return "I am a Person";
};
const obj = new Person(); // error.

const car = {
  name: "Creta",
  getName: function () {
    console.log(this);
  },
};
car.getName();

const car = {
  name: "Creta",
  getName: () => {
    console.log(this);
  },
};
