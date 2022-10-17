const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.top = null;
  }


  root(){
    if(!this.top){
      return null;
    }
    return {
      data: this.top.data
      };
  }

  getRoot(){
    return this.top;
  }

  add(data) {
    const newNode = new Node(data);
    
    if(!this.top){
      this.top = newNode;
      return null;
    }

    let currentNode  = this.top;
    while(currentNode){
      if(newNode.data < currentNode.data){
        if(!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
        
      } else {
         if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } 
    }
    
    
  }

  find(data) {
    let currentNode  = this.top;
    if(!this.top) {
      return null;
    }
    
    while(currentNode){
      if(data < currentNode.data){
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
           currentNode = currentNode.right;
    } else {
        return currentNode;
    }
}

return null;
  }

  remove(data) {
    this.top = this.removeNode(this.top, data); 
}

  removeNode(node, data) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } else {
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}
  

  has(data){
    if(this.find(data)){
      return true;
    }

    return false;
  }

  min(){
    let node = this.top;
    return this.minNode(node).data;
  }

  max(){
    let node = this.top;
    return this.maxNode(node).data;
  }

  maxNode(node){   
    if(!node) {
      return 
    }
    if (node.right === null)
        return node;
    else
        return this.maxNode(node.right);
    }
  
  minNode(node) {
    if (node.left === null)
        return node;
    else
        return this.minNode(node.left);
}

  
}

module.exports = {
  BinarySearchTree
};