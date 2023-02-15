class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if(! this.head) {
            this.head = node;
            this.tail = node;
            this.length += 1;
            return linkedList
        }
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
        return linkedList;
    }

    pop() {
        if (!this.tail) {
            console.log(`Can't pop from empty linked list`);
            return null;
        }

        let elem = this.tail.val;
        this.tail = this.tail.prev;
        this.length -= 1;
        return elem;
    }

    shift() {
        // remove from start
        if (!this.head) {
            console.log(`Can't pop from empty linked list`);
            return null;
        }

        let elem = this.head.val;
        this.head = this.head.next;
        this.length -= 1;
        return elem;
    }

    unshift(val) {
        // remove from start
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.length += 1;
            return linkedList;
        }

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
        let node = new Node(val);
        if (index <= 1) {
            node.next = this.head;
            this.head = node;
            this.length += 1;
            return linkedList;
        }

        if (index == this.length) {
            this.tail.next = node;
            this.tail = this.tail.next;
            this.length += 1;
            return linkedList;
        }

        let cur = this.head;
        let prev = null;
        while (--index) {
            prev = cur;
            cur = cur.next;
        }   
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
        while (--index) {
            cur = cur.next;
        }
        cur.prev.next = cur.next;
        this.length -= 1;
        return linkedList;
    }

    reverse() {
        let cur = this.head;

        while (cur) {
            let next = cur.next;
            cur.next = cur.prev;
            cur = next;
        }
        this.head = cur;
        return linkedList;
    }
}