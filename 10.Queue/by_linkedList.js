class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val) {
        // Add to end(tail)
        var node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        return ++this.size;
    }

    dequeue() {
        // Remove from begining(head)
        if(!this.head) {
            return `Can't pop from empty queue`;
        }
        
        var elem = this.head.val;
        if (this.head === this.tail) {
            this.tail = null;
        }
        this.head = this.head.next;
        this.size--;
        return elem;
    }
}

var q = new Queue;

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());