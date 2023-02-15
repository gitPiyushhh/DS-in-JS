class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val < current.val) {
          // If not at left
          if (current.left === null) {
            current.left = node;
            return this;
          }

          // If elem at left
          else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  search(val) {
    if (! this.root) {
        return `Tree is empty`;
    } else {
        var current = this.root;
        while (current) {
            if (current.val === val) {
                return 'Present';
            }
            else {
                if (val < current.val) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
            }
        }
        return `Not Present`
    }
  }

  bfs() {
    var node = this.root, que = [], data = [];
    que.push(node);

    while (que.length) {
        node = que.shift();
        data.push(node.val);

        if (node.left) que.push(node.left); 
        if (node.right) que.push(node.right); 
    }
    return data;
  }

  dfsPreorder(node, res) {
    if (! node) {return}
    res.push(node.val);

    if (node.left) { this.dfsPreorder(node.left, res);}
    if (node.right) { this.dfsPreorder(node.right, res);}

    return res;
  }

  dfsPostorder(node, res) {
    if (node.left) { this.dfsPostorder(node.left, res);}
    if (node.right) { this.dfsPostorder(node.right, res);}

    res.push(node.val);
  }

  dfsInorder(node, res) {
    if(! node) return;

    if (node.left) { this.dfsInorder(node.left, res);}
    res.push(node.val);
    if (node.right) { this.dfsInorder(node.right, res);}
  }
}

var tree = new Tree();
tree.root = new Node(10);

tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

var preorder = [], postorder = [], inorder = [];
console.log(tree.dfsPreorder(tree.root, preorder));
tree.dfsPostorder(tree.root, postorder);
tree.dfsInorder(tree.root, inorder);