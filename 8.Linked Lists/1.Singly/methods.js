class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;

        this.length += 1;
        return linkedList;
    }

    pop() {
        if (! this.tail) console.log(`Can't pop from empty Linked List`);
        
        let cur = this.head
        while (cur.next.next) {
            cur = cur.next
        }
        this.tail = cur
        let res = cur.next.val;
        this.tail.next = null;
        this.length -= 1;
        return res;
    }

    shift() {
        // Remove from start
        if(!this.head) return `Can't remove from empty Linked List`;
        this.head = this.head.next;
        this.length -= 1;
        return linkedList;
    }

    unshift(val) {
        // Adding to start
        if(! this.head) this.head = new Node(val)
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.length += 1;
        return linkedList;
    }

    get(index) {
        // Return value at index
        if (index == 0 || index > this.length) return null;

        let cur = this.head;
        while (--index) {
            cur = cur.next;
        }
        return cur.val;
    }

    set(val, index) {
        // Update vallue at given index
        if (index == 0 || index > this.length) return null;

        let cur = this.head;
        while (--index) {
            cur = cur.next;
        }
        cur.val = val;
        return linkedList;
    }

    insert(val, index) {
        if (index <= 1) {
            let node = new Node(val);
            node.next = this.head;
            this.head = node;
            return linkedList;
        }

        if (index == this.length) {
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
            return linkedList;
        }

        let cur = this.head;
        let prev = null;
        while (--index) {
            prev = cur;
            cur = cur.next;
        }
        let node = new Node(val);
        prev.next = node;
        node.next = cur;
        this.length += 1;
        return linkedList;
    }

    remove(index) {
        if (index <= 1 && this.head.next) {
            this.head = this.head.next;
            this.length -= 1;
            return linkedList;
        }

        let cur = this.head;
        let prev = null;
        while (--index) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = cur.next;
        this.length -= 1;
        return linkedList;
    }

    reverse() {
        let prev = null;
        let cur = this.head;

        while (cur) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        this.head = cur;
        return linkedList;
    }
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
console.log(linkedList.reverse());