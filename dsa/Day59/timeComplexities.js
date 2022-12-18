//Linear Search is algorithm to search given value in an array

/*
    @params:{
        array:Array of numbers,
        value: Key that need to search in given array
    }
    @return{
        0: value not found,
        1: value Found in given array
    }
*/
function linearSearch(array,value){
    let n = array.length;// O(1)
        // O(1) + 0(1) + O(1) = O(3)
    for(let i=0;i<n;i++){ //
        if(array[i]===value){  //O(1)
            return 1; // O(1)
        }
    }
    //O(n)
    return 0; // O(1)
}
// O(1)+O(n)+O(1) = O(n)
//O(n)

let isFound = linearSearch([1,2,5,6,8,2,7,10,15],15)
console.log(isFound)





// sum of array elements

let array = [-1, 2, 4, 6, 8, 10];
let n = array.length;

const total = sum(array, n);
console.log(total);

function sum(array, n) {
  let total = 0; 

  for (let i = 0; i < n; i++) {
    total = total + array[i]; 
  }

  return total; 
}

// sum of 2d array elements

let twoDarray = [
    [-1, 2, 3, 4],
    [1, 2, 3, 4],
  ];
  let rows = twoDarray.length;
  
  const gTotal = sum2DArray(twoDarray, rows);
  console.log(gTotal);
  
  function sum2DArray(matrix, rows) {
    let sum = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        sum = sum + matrix[i][j];
      }
    }
    return sum;
  }
  















