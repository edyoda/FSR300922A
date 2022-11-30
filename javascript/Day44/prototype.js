let arr =[1,2,3,4,5,6];


Array.prototype.getEvens = function(){
    const array = this;
    const evenArray =[];
        
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            evenArray.push(array[i])
        }
    }
    return evenArray
    
};

 console.log(arr.getEvens())
  console.log([10,12,34,43,77,9,89].getEvens())