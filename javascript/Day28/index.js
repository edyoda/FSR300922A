let arr = [1, 2, 3, 4, 5];

arr.unshift(-1);
console.log(arr);
arr.shift();
console.log(arr);

const isPresent = arr.includes(-1);

console.log(isPresent);

const reversedArray = arr.reverse();

console.log(reversedArray);

const arr2 = [10, 11, 12, 13, 14, 15];

const arr3 = [-1, -2, -3, -4, -5];

const newArray = arr.concat(arr2, arr3);

console.log(newArray);

const removedValues = arr.splice(4, 2);

console.log(removedValues);
console.log(arr);

arr.splice(4, 2, -1, -2);

console.log(arr);

const stringArray = arr.toString();

console.log(stringArray);

const hypenArray = arr.join("_");
console.log(arr.join(""));

console.log(hypenArray);

const sliceArray = arr.slice(3, 7);

console.log(sliceArray, arr);

arr.fill("z");
console.log(arr);

const lastIndex = arr.lastIndexOf("a");

console.log(lastIndex);
const index = arr.indexOf("z");

console.log(index);

if (index !== -1) {
  console.log("found");
} else {
  console.log("not found");
}
console.log(Array.isArray(arr));

const nestedArray = [1, 2, [3, 4, [-4, 5], 8], 6, 7];

const flatArray = nestedArray.flat(2);
console.log(flatArray);

var a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3, [4, 5]);
a.shift();
a.shift();
a.shift();

console.log(a);
