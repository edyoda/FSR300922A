// Question 1:
// Write a program to search if a number exists in an array.
// If the number exists then return the position.
// If it exists multiple time then return an array with all the positions.
// If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

function findNumber(array, num) {
  let positions = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      positions.push(i);
    }
  }
  const length = positions.length;
  if (length === 0) {
    return -1;
  } else if (length === 1) {
    return positions[0];
  }
  return positions;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 4, 2, 3, 5, 2];
const position = findNumber(arr, 10);
console.log(position);

for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = i; j < 5; j++) {
    str += "*";
  }
  console.log(str);
}
// *****
// ****
// ***
// **
// *

let newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
//reverse logic

let my_function = (a, b) => a + b;
const arrFun = (...args) => {
  console.log(args);
};

let obj = {
  name: "Utkarsh",
  getName: function () {
    //   console.log(this)//obj
    const my_function = () => {
      console.log(this); //obj
    };
    my_function();
  },
};

obj.getName();

obj = {
  name: "Utkarsh",
  getName: () => {
    console.log(this); //window
  },
};

obj.getName();

function abc() {
  console.log("hello");
}

const obj3 = new abc();
console.log(obj3);

const xyz = () => {
  console.log("Bye");
};

const obj2 = new xyz();
console.log(obj2);
