class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.length=0;
    }
    insert(value){
         const node = new Node(value);
         if(this.head===null){
             this.head = node;
             this.length++;
         }
         else{
             let curr = this.head;
             while(curr.next!==null){
                 curr = curr.next;
             }
             
             curr.next = node;
             this.length++;
         }
    }
    insertAtPos(value,pos){
    
        const node = new Node(value);
        if(pos>=this.lenght) return -1;
        if(pos==0){
            const prev = this.head;
            
            this.head = node;
            this.head.next = prev;
            this.length++;
        }else{
            let prev= this.head;
            let curr = this.head;
            let count = 0;
            
            while(count<pos){
                    count++;
                prev = curr;
                curr = curr.next;
            }
            prev.next = node;
            node.next = curr;
            this.length++;
        }
    }
    pop(){
        if(this.head===null) return null; //Underflow
            
            let curr = this.head.next;
            let prev = this.head;
            
            while(curr.next!=null){
                prev =curr;
                curr = curr.next;
            }
          prev.next = null;
          this.length--;
    }
    remove(pos){
        if(this.head===null) return null
        
        if(pos>=this.length) return null
        
        if(pos==0){
            this.head = this.head.next;
        }else{
            
            let prev =  this.head;
            let curr = this.head;
            let count = 0;
            
            while(count<pos){
                count++;
                prev = curr;
                curr = curr.next;
            }
            
            prev.next = curr.next;
            
            
            
            
        }
        
        this.length--;
        
        
    }
    getData(pos){
        if(!this.head) return null
        let count = 0;
        let curr = this.head;
        
        while(count<pos){
            count++;
            curr = curr.next;
        }
        console.log(curr.data)
        return curr.data
        
    }
    
}

function print(ll){
    console.log(JSON.stringify(ll))
}

const ll = new LinkedList()

ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
// print(ll)

// ll.insertAtPos('utkarsh',2)
  print(ll)

// ll.pop()
// ll.remove(0)
// ll.remove(2)

ll.getData(2)
ll.getData(1)


