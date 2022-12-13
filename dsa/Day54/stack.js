//Stack has 3 operations
//push: adds value on the top
//pop : removes value from the top
//peek: return the top element of stack

//Stack Overflow
//Stack Undeflow

class Stack{
    constructor(size){
        this.data = [];
        this.size=size;
    }
    push(value){
        if(this.data.length<this.size){
             this.data.push(value);
             return this.data.length;
        }
        console.log('Stack Overflow')
        return -1;
    }
    pop(){
        if(this.isEmpty()){
        console.log("Stack Underflow")
          return -1;  
        }
       return this.data.pop();
    }
    peek(){
        const length = this.data.length;
        if(this.isEmpty()){
            console.log("Stack is Empty")
            return -1;
        }
       return this.data[length-1];
    }
    isEmpty(){
       return this.data.length===0;
    }
}

const stack = new Stack()
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.pop()
stack.push(10)
stack.push(12)
stack.pop()
stack.push(13)



console.log(stack.peek())


const stack2 = new Stack()
stack2.push('Rajat')
stack2.push('Smita')
stack2.push('Sree')
stack2.pop()
stack2.push('Ajay')
stack2.push('Rajeev')
stack2.push('Aniket')
stack2.pop()
stack2.push('Rahul')
stack2.push('Varsha')
stack2.pop()
stack2.pop()

console.log(stack2.peek())









const stack3 = new Stack(4)


stack.push('Apple')
stack.push('Banana')
stack.push('Stawberry')
stack.push('Guava')
stack.push('Cherry')

console.log(stack.peek())


//reverse an array using stack 

const array = [1,2,3,4,5];

const newStack = new Stack(array.length);



for(let i=0;i<array.length;i++){
    newStack.push(array[i])
}

//traversing on stack
let arr = [];
while(!newStack.isEmpty()){
    const popedValue = newStack.pop();
    arr.push(popedValue)
}
console.log(arr)