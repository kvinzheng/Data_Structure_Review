## BinarySearch Tree ##

Binary search trees have impressive performance characteristics since all operations can be done in O(log(n)) time on average. However, this is not always the case if a tree is unbalanced (more nodes on one side than another). The worst case runtime for a BST can be O(n) if a tree is completely unbalanced (there are much more complex data structures like AVL and Red-Black Trees which balance themselves to prevent these kinds of issues).

**Operation	Average Runtime
search	O(log(n))
insert	O(log(n))
delete	O(log(n))
space complexity	O(n)**


## Depth First Search ##
Preorder:
1. Visit the root
2. Traverse the left subtree
3. Traverse the right subtree

InOrder:
1. Traverse the left subtree
2. Visit the root
3. Traverse the right subtree

PostOrder
1. Traverse the left subtree
2. Traverse the right subtree
3. Visit the root

## Breadth First Search ##
1. start at the root
2. place the root node in a queue
3. while there is anything in the queue
4. remove the first element in the queue (dequeue)
5. if what has been dequeued has a left node
6. enqueue the left node
7. if what has been dequeued has a right node
8. enqueue the right node
