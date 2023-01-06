//Queue has 3 operations
//enqueue: adds value from the end
//dequeue : removes value from the start
//front: return the front element 



class Queue{
    constructor(size){
       this.data =[];
       this.size=size;
    }
    enqueue(value){
        if((this.size&&this.data.length<this.size)||!this.size){
              this.data.push(value);
              return this.data.length;
        }
        
        console.log('Queue Oveflows')
        return -1;
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('Queue Underflow')
            return -1;
        }
        let value = this.data.shift();
        return value;
    }
    front(){
        if(this.isEmpty()){
            console.log('No Front value')
            return -1;
        }
        const frontValue = this.data[0]
        console.log(frontValue)
       return frontValue
    }
    isEmpty(){
        return this.data.length===0;
    }
    
}

const q = new Queue(4);

q.front()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q)









