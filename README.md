# Balanced Binary Search Tree (BST) Implementation

This project implements a balanced Binary Search Tree (BST) in JavaScript. The BST supports basic operations such as insertion, deletion, traversal, and checking if the tree is balanced. Additionally, it provides methods to rebalance the tree when it becomes unbalanced.

## Node Class

The `Node` class represents a single node in the BST. Each node has a data attribute, a left child, and a right child.

## Tree Class

The `Tree` class represents the entire BST. It has various methods to manipulate and traverse the tree.

### Methods

- **Constructor (`constructor(array)`)**: Initializes the tree with a given array of values. The tree is built as a balanced BST.
- **`removeDuplicatesAndSort(array)`**: Removes duplicate values from the array and sorts it.
- **`buildTree(array)`**: Builds a balanced BST from the sorted array.
- **`insert(value)`**: Inserts a new value into the BST.
- **`deleteItem(value)`**: Deletes a value from the BST.
- **`find(value)`**: Finds a value in the BST and returns the corresponding node.
- **`levelOrder(callback)`**: Traverses the tree in level-order.
- **`inOrder(callback)`**: Traverses the tree in in-order.
- **`preOrder(callback)`**: Traverses the tree in pre-order.
- **`postOrder(callback)`**: Traverses the tree in post-order.
- **`height(node)`**: Returns the height of a given node.
- **`depth(node)`**: Returns the depth of a given node.
- **`isBalanced()`**: Checks if the tree is balanced.
- **`rebalance()`**: Rebalances the tree.

### prettyPrint Function

The `prettyPrint` function prints the tree structure in a readable format.

### Driver Script

The driver script demonstrates the following:

1. Creates a BST from an array of random numbers.
2. Confirms that the tree is balanced.
3. Prints the tree in level, pre, post, and in-order.
4. Unbalances the tree by adding several numbers.
5. Confirms that the tree is unbalanced.
6. Rebalances the tree.
7. Confirms that the tree is balanced again.
8. Prints the tree in level, pre, post, and in-order again.

## Usage

To use the implementation, copy the code into a JavaScript file and run it in a JavaScript environment (e.g., Node.js).

```javascript
const randomArray = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
const tree = new Tree(randomArray);

console.log("Initial tree:");
prettyPrint(tree.root);

console.log("Tree is balanced:", tree.isBalanced());

console.log("Level-order traversal:", tree.levelOrder());
console.log("Pre-order traversal:", tree.preOrder());
console.log("In-order traversal:", tree.inOrder());
console.log("Post-order traversal:", tree.postOrder());

[150, 200, 250].forEach(value => tree.insert(value));

console.log("Tree after inserting values > 100:");
prettyPrint(tree.root);

console.log("Tree is balanced:", tree.isBalanced());

tree.rebalance();

console.log("Tree after rebalancing:");
prettyPrint(tree.root);

console.log("Tree is balanced:", tree.isBalanced());

console.log("Level-order traversal:", tree.levelOrder());
console.log("Pre-order traversal:", tree.preOrder());
console.log("In-order traversal:", tree.inOrder());
console.log("Post-order traversal:", tree.postOrder());
