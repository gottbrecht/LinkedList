//start defining how your node and linked list has to look like.
//a node is suppose to have references to previous(prev) and the next(next) node, and a payload(data). 
//A list needs to have a reference for both the first (head/first) and the last (tail/last) node.

const node1 = { //a node not depending on other nodes containing an "A"
    prev: null,
    next: null,
    data: "A" //payload
}
const node2 = {
    prev: null, 
    next: null,
    data:"B"
}

const node3 = {
    prev: null,
    next: null,
    data: "E"
}

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

const linkedList = [node1, node2, node3];

//Note: you cannot add notes and their connections at the same time. First when they exists



const num = new LinkedList();



//Make a class for your list. Put the single node in as a single ekement for the list - both head and tail 

class LinkedList {
    constructor() {
        this.head = node1;
        this.tail = node1;
    
    }
//call this method in the console, like: num.dumpList();
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

    add(node1) { //adds a new node in the end of the list
        if(!this.head) {
            this.head = node;
            this.tail = node;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;

    } //this methid checks if the list is empty

}

//make an instance of LinkedList so you have code for testing. You can write that in the end of your JS file. 

//make to more nodes og chain them together - hardcoded
}
