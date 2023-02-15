class MaxHeap {
  constructor() {
    this.val = [];
  }

  insert(val) {
    this.val.push(val);
    this.bubbleUp();
    return this.val;
  }

  bubbleUp() {
    var index = this.val.length - 1;
    var elem = this.val[index];

    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      var parent = this.val[parentIndex];
      if (elem <= parent) {
        break; // Correct position {Max Heap}
      }
      this.val[parentIndex] = elem;
      this.val[index] = parent;
      index = parentIndex;
    }

    return this.val;
  }

  remove() {
    const max = this.val[0];
    const elem = this.val.pop();
    if (this.val.length > 0) {
      this.val[0] = elem;

      // Tricle down
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    this.index = 0;
    const length = this.val.length;
    const elem = this.val[this.index];

    while (true) {
      let leftChildIndex = 2 * this.index + 1;
      let rightChildIndex = 2 * this.index + 2;
      let leftChild, rightChild;
      let swaps = null; // to keep index of larsest child

      // Only when inbound
      if (leftChildIndex < length) {
        leftChild = this.val[leftChildIndex];

        if (leftChild > elem) {
          swaps = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        leftChild = this.val[leftChildIndex];

        if (leftChild > elem) {
          swaps = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.val[rightChildIndex];
        if (
          (swaps === null && rightChild > elem) ||
          (swaps !== null && rightChild > leftChild) // After one left swap still right child is greatest
        ) {
          swaps = rightChildIndex;
        }
      }

      if (swaps === null) {
        break;
      }
      this.val[this.index] = this.val[swaps];
      this.val[swaps] = elem;
      this.index = swaps;
    }
  }
}

var h1 = new MaxHeap();
console.log(h1.insert(1));
console.log(h1.insert(2));
console.log(h1.insert(3));
console.log(h1.insert(4));
console.log(h1.insert(5));
console.log(h1.remove());
