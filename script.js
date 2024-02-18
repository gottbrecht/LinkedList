
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
            console.log("node:");
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
    removeLast() {
        if(!this.head) {
            return null;
        }

        const removedNode = this.tail;

        if(this.head === this.tail) { //only one node in the list
            this.head = null;
            thia.tail = null;
        }else { //more than one
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        return removedNode;
    }

    removeFirst() {
        if(!this.head) {
            return null;
        }
        const removedNode = this.head;

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        return removedNode;
    }

    removeNode(nodeToRemove) {
        if(!nodeToRemove) {
            return null; //node to remove is not here
        }

        const prevNode = nodeToRemove.prev;
        const nextNode = nodeToRemove.next;

        if(prevNode) {
            prevNode.next = nextNode;
        }else {//remove head
            this.head = nextNode; 
        }
        return nodeToRemove;
    }
}

const node1 = {
    prev: null,
    next: null,
    data: "A"
};

const node2 = {
    prev: null,
    next: null,
    data: "B"
};

const node3 = {
    prev: null,
    next: null,
    data: "E"
};

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;



//create an instance of LinkedList - test med tom liste
const num = new LinkedList();
num.dumpList();

//test with one element
num.add(1);
num.dumpList();


//add nodes to the list
num.add("A");
num.add("B");
num.add("E");


//test with two elements
num.addFirst(0);
num.dumpList();
