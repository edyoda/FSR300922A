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

ll.insertAtPos('utkarsh',2)
 print(ll)

