
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //call this method in the console, num.dumpList();
    dumpList() {
        let aNode = this.head;
        console.log("List:");
        console.log(` - head: ${this.head ? this.head.data : 'null'}`);
        console.log(` - tail: ${this.tail ? this.tail.data : 'null'}`);
        console.log("--------");

        while(aNode) {
            console.log("node1:");
            console.log(` prev: ${aNode.prev ? aNode.prev.data : 'null'}`);
            console.log(` next: ${aNode.next ? aNode.next.data : 'null'}`);
            console.log(` data: ${aNode.data}`);
            console.log("--------");
            aNode = aNode.next;

        }
    }

    add(data) {
        const newNode = {
            prev: null,
            next: null,
            data
        };

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    addFirst(data) {
        const newNode = {
            prev: null,
            next: null,
            data
        };

        if(!this.head) { //if the list i sempty both head and tail are the new node
            this.head = newNode;
            this.tail = newNode

        }else { //if the list is not empty, update the head and link to existing head
        
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
}

//create an instance of LinkedList - test med tom liste
const num = new LinkedList();
num.dumpList();

//test with one element
num.add(1);
num.dumpList();

/*
//add nodes to the list
num.add("A");
num.add("B");
num.add("E");
*/

//test with two elements
num.addFirst(0);
num.dumpList();
