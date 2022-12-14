//find maximum array;

function maximumNumber(array, k) {
  let output = [];
  const n = array.length;
  if (n == 0) return output;

  let max = array[0];

  for (let i = 0; i < n; i++) {
    if (array[i] >= max) {
      max = array[i];
    }
  }
  console.log(max);
}

let array = [1, 2, 3, 1, 32, 10, 5, 2, 3, 6];
maximumNumber(array);





// reutrn all max in given K size windows of given array;

function maximWindow(array,k){
    let output =[];
    const n = array.length;
    if  (n == 0) return output;
    
    
    for(let i=0;i<=n-k;i++){
       let max = array[i];
      for(let j=i;j<(k+i);j++){
         if (max <= array[j]) {
            max = array[j];
        }
      }
     output.push(max)
    }
    return output
}


let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6] 
let k = 3;

const maximumValues = maximWindow(arr,k);
console.log(maximumValues)


// reutrn all max in given K size windows of given array;

class Queue {
    constructor() {
      this.items = [];
      this.length = 0;
      this.enqueue = function (value) {
        this.items.push(value);
        this.length++;
      };
      this.dequeue = function () {
        this.items.shift();
        this.length--;
      };
      this.front = function () {
        if (this.length) {
          const frontElement = this.items[0];
          console.log(frontElement);
          return frontElement;
        } else {
          console.log("Queue is empty!");
          return -1;
        }
      };
    }
  }
  
  const queue = new Queue();
  
  for (let i = 0; i < array.length; i++) {
    queue.enqueue(array[i]);
  }
  
  
  
  while (queue.length >= k) {
    const currentWindow = queue.items.slice(0, k);
    console.log(currentWindow);
    const max = Math.max(...currentWindow);
  
    console.log(max);
  
    queue.dequeue();
  }
  