var y; //Declaration variable y

let x=2; // Declaration & intializing the varaiable x with value 2;

const s=[];// not just declare the const variable.


const array = new Array(); // intansiating array of Array class.

const n = new Number(2)


let arr = [];

arr.push(2)
arr.push(3)
arr.unshift(2)
console.log(arr)
arr.shift()
console.log(arr)



arr[0] = 23;

arr[2] = 43;

console.log(arr)



const fruits = new Array(2); // intial size to array

console.log(fruits)

const frt = new Array("Apple","Banana","PineApple"); // intial value to array

console.log(frt)


let arr = [2,3,4,5,6];


for(let i=0;i<arr.length;i++){
  
  console.log(arr[i])
}

for(let i=arr.length-1;i>=0;i--){
  
  console.log(arr[i])
}

for(let i=3;i>=0;i--){
  
  console.log(arr[i])
}

for(let i=parseInt(arr.length/2);i<arr.length;i+=2){
  console.log(arr[i])
}



let arr = [1,2,3,4,5,6]

let i =0;
while(i<arr.length){
  console.log(arr[i])
  i+=2
}

console.log(arr[3])

let arr = [1,2,3,4,5,6]

// linear search BigO(n)

let value = 6


for(let i=0;i<arr.length;i++){
  if(value===arr[i]){
    console.log(`${value} found at ${i} position`);
    break;
  }
}

//binary search BigO(log(n))


delete arr[5]
arr.pop()
arr.shift()
arr.splice()
console.log(arr)
