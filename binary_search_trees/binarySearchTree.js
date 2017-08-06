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
            // console.log('this in LEFT', this);
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

BinTree.prototype.DFSPreOrder = function(){
  let current = this.root;
  let data = [];

  function traverse(node){
    data.push(node.value);

    if(node.left){
      traverse(node.left);
    }
    if(node.right) {
      traverse(node.right);
    }

  }
  traverse(current);
  return data;
}

BinTree.prototype.DFSInOrder = function(){
  let current = this.root;
  let data = [];

  function traverse(node){
    if(node.left){
      traverse(node.left);
    }
    data.push(node.value);
    if(node.right) {
      traverse(node.right);
    }
  }
  traverse(current);
  return data;
}

BinTree.prototype.DFSPostOrder = function(){
  let current = this.root;
  let data = [];

  function traverse(node){
    if(node.left){
      traverse(node.left);
    }

    if(node.right) {
      traverse(node.right);
    }
    data.push(node.value);
  }
  traverse(current);
  return data;
}

BinTree.prototype.breadthFirstSearch = function(){
  //this is the first node
  let node = this.root;
  //this is the queue;
  let queue = [];
  //this is the final data;
  let data = [];

  queue.push(node);
  while(queue.length > 0){
    let out = queue.shift();
    data.push(out.value);

    if(out.left){
      queue.push(out.left);
    }
    if(out.right){
      queue.push(out.right);
    }
  }

  return data;
}

module.exports = {
  BinTree: BinTree,
  Node: Node
}
