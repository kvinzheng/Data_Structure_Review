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
      //set the initial this.root value
      let current = this.root;

      while (true) {
        if (value < current.value) {
          //if there is nothing on the left
          if (current.left === null) {
            //make a new node and get out
            current.left = new Node(value);
            console.log('this in LEFT', this);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          //if there is nothing on the right
          if (current.right === null) {
            //make a new node and get out
            current.right = new Node(value);
            // console.log('this in RIGHT', this);
            return this;
          } else {
            current = current.right;
          }
        } else {
          return 'duplicate!';
        }
      }
    }
  } else {
    return 'Please insert a number';
  }
}

BinTree.prototype.containsIteratively = function(value) {
  let current = this.root;
  let isFound = false;

  while(current && !isFound){
    if(value < current.value) {

      current = current.left
    }
    else if(value > current.value) {
      current = current.right;
    }
    else if (current.value === value){
      isFound = true;
    }
  }
  return isFound;
}
module.exports = {
  BinTree: BinTree,
  Node: Node
}
