function BinTree() {
  this.root = null;
}

//createing the node;
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

//note-dublicates are excluded in our tree!

BinTree.prototype.insertIteratively = function(value) {
  //only accept number
  if (Number.isInteger(value)) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      //current node used for traversal, just like linkedin lists!
      let current = this.root;
      //keep looping till we get to the correct spot;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            console.log('what is this here LEFT', this);
            return this;
          } else {
            current = current.left;
            // break;
          }
        }
        else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            console.log('what is the this here RIGHT,', this);
            return this;
          } else {
            current = current.right;
            // break;
          }
        }
        else {
          return 'duplicate!';
        }
      }

    }
  }
  else {
    return 'Please insert a number';
  }
}

module.exports = {
  BinTree: BinTree,
  Node: Node
}
