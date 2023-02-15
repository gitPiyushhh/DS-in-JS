// Add to start and remove from start for constant time..

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.head) {
            return `Can't pop from empty stack..`
        }
        else {
            let elem = this.head.val;
            this.head = this.head.next;
            this.size--;
            return elem;
        }
    }
}

var stk = new Stack;
stk.push(1);
stk.push(2);
stk.push(3);
console.log(stk.pop());
console.log(stk.pop());