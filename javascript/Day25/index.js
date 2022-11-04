var input = 7;
var output1 = ++input + ++input + ++input;
var output2 = input++ + input++ + input++;
var output3 = input++ + ++input + input++;
console.log(output1, output2, output3);
console.log(input);
// 27,33,43
//16

var obj = {
  name: "Utkarsh",
  age: 23,
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var twoDArray = [
  [1, 2, 3],
  [4, 3, 5],
  [6, 6, 10],
];

arr.push(10);
arr.push("Utkarsh");
arr.push(obj);
arr.push(false);

arr.unshift(0);
arr.unshift(-1);
arr.unshift(-2);

var removed_value = arr.pop();

arr.pop();

console.log(arr, removed_value);

arr.shift();
arr.shift();
arr.shift();

console.log(arr);
console.log(arr);
console.log(arr.length);

var arr = [];

arr.push(1);
arr.push(2);
arr.pop();
arr.unshift(4);
arr.push(3);
arr.unshift(5);
arr.pop();
arr.shift();
arr.push(5);
arr.shift();
arr.unshift(-1);
arr.push(8);
console.log(arr.length, arr);
//[-1,1,5,8]

var arr = [];

arr[arr.length] = 1;

arr[arr.length] = 2;
arr[arr.length] = 3;
arr[arr.length] = 4;

console.log(arr);
arr[arr.length - 1] = 5;

console.log(arr);
arr[0] = 9;
console.log(arr);
