    class Node {
        constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
        }
    }

    class Tree {
        constructor(array) {
          this.root = this.buildTree(array);
        }
      
        // Function to remove duplicates and sort the array
        removeDuplicatesAndSort(array) {
          return [...new Set(array)].sort((a, b) => a - b);
        }
      
        // Function to build the tree
        buildTree(array) {
          array = this.removeDuplicatesAndSort(array);
          return this.buildTreeHelper(array, 0, array.length - 1);
        }
      
        buildTreeHelper(array, start, end) {
          if (start > end) return null;
      
          const mid = Math.floor((start + end) / 2);
          const node = new Node(array[mid]);
      
          node.left = this.buildTreeHelper(array, start, mid - 1);
          node.right = this.buildTreeHelper(array, mid + 1, end);
      
          return node;
        }
      
        // Insert a value
        insert(value) {
          this.root = this.insertHelper(this.root, value);
        }
      
        insertHelper(node, value) {
          if (node === null) return new Node(value);
      
          if (value < node.data) {
            node.left = this.insertHelper(node.left, value);
          } else if (value > node.data) {
            node.right = this.insertHelper(node.right, value);
          }
      
          return node;
        }
      
        // Delete a value
        deleteItem(value) {
          this.root = this.deleteItemHelper(this.root, value);
        }
      
        deleteItemHelper(node, value) {
          if (node === null) return node;
      
          if (value < node.data) {
            node.left = this.deleteItemHelper(node.left, value);
          } else if (value > node.data) {
            node.right = this.deleteItemHelper(node.right, value);
          } else {
            // Node with only one child or no child
            if (node.left === null) return node.right;
            else if (node.right === null) return node.left;
      
            // Node with two children: Get the inorder successor (smallest in the right subtree)
            node.data = this.minValue(node.right);
      
            // Delete the inorder successor
            node.right = this.deleteItemHelper(node.right, node.data);
          }
      
          return node;
        }
      
        minValue(node) {
          let minValue = node.data;
          while (node.left !== null) {
            node = node.left;
            minValue = node.data;
          }
          return minValue;
        }
      
        // Find a value
        find(value) {
          return this.findHelper(this.root, value);
        }
      
        findHelper(node, value) {
          if (node === null || node.data === value) return node;
      
          if (value < node.data) return this.findHelper(node.left, value);
      
          return this.findHelper(node.right, value);
        }
      
        // Level Order Traversal
        levelOrder(callback) {
          if (this.root === null) return [];
      
          const result = [];
          const queue = [this.root];
      
          while (queue.length > 0) {
            const node = queue.shift();
      
            if (callback) {
              callback(node);
            } else {
              result.push(node.data);
            }
      
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
          }
      
          return callback ? undefined : result;
        }
      
        // In-order Traversal
        inOrder(callback) {
          const result = [];
          this.inOrderHelper(this.root, result, callback);
          return callback ? undefined : result;
        }
      
        inOrderHelper(node, result, callback) {
          if (node !== null) {
            this.inOrderHelper(node.left, result, callback);
            if (callback) {
              callback(node);
            } else {
              result.push(node.data);
            }
            this.inOrderHelper(node.right, result, callback);
          }
        }
      
        // Pre-order Traversal
        preOrder(callback) {
          const result = [];
          this.preOrderHelper(this.root, result, callback);
          return callback ? undefined : result;
        }
      
        preOrderHelper(node, result, callback) {
          if (node !== null) {
            if (callback) {
              callback(node);
            } else {
              result.push(node.data);
            }
            this.preOrderHelper(node.left, result, callback);
            this.preOrderHelper(node.right, result, callback);
          }
        }
      
        // Post-order Traversal
        postOrder(callback) {
          const result = [];
          this.postOrderHelper(this.root, result, callback);
          return callback ? undefined : result;
        }
      
        postOrderHelper(node, result, callback) {
          if (node !== null) {
            this.postOrderHelper(node.left, result, callback);
            this.postOrderHelper(node.right, result, callback);
            if (callback) {
              callback(node);
            } else {
              result.push(node.data);
            }
          }
        }
      
        // Height of the node
        height(node) {
          if (node === null) return -1;
          return (
            1 + Math.max(this.height(node.left), this.height(node.right))
          );
        }
      
        // Depth of the node
        depth(node) {
          return this.depthHelper(this.root, node, 0);
        }
      
        depthHelper(root, node, depth) {
          if (root === null) return -1;
          if (root === node) return depth;
      
          let leftDepth = this.depthHelper(root.left, node, depth + 1);
          if (leftDepth !== -1) return leftDepth;
      
          return this.depthHelper(root.right, node, depth + 1);
        }
      
        // Check if the tree is balanced
        isBalanced() {
          return this.isBalancedHelper(this.root);
        }
      
        isBalancedHelper(node) {
          if (node === null) return true;
      
          let leftHeight = this.height(node.left);
          let rightHeight = this.height(node.right);
      
          return (
            Math.abs(leftHeight - rightHeight) <= 1 &&
            this.isBalancedHelper(node.left) &&
            this.isBalancedHelper(node.right)
          );
        }
      
        // Rebalance the tree
        rebalance() {
          const values = this.inOrder();
          this.root = this.buildTree(values);
        }
      }
      
      // Function to print the tree
      const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) return;
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
      
      // Driver script
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
      
  