const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor () {
    this.list = null;
  }

  root() {
    return this.list;
  }

  add(data) {
  	if (this.list == null) {
        this.list = {};
        this.list.data = data;
      }
  
    const f = (obj) => {
      
      if (obj.data == null) {
        obj.data = data;
      } else if (data < obj.data) {
        if (obj.left) {
          f(obj.left);
        } else {
          obj.left = {};
          obj.left.data = data;
        }
      } else if (data > obj.data) {
        if (obj.right) {
          f(obj.right);
        } else {
          obj.right = {};
          obj.right.data = data;
        }
      } else return;
    }
    f(this.list);
  }
    

  has(data) {
    let tmp = this.list;
    while (tmp) {
      if (tmp.data == data) {
        return true
      } else {
        if (data < tmp.data) {
          tmp = tmp.left;
        } else tmp = tmp.right;
      }
    }
    return false;
  }

  find(data) {
    let tmp = this.list;
    while (tmp) {
      if (tmp.data == data) {
        return tmp;
      } else {
        if (data < tmp.data) {
          tmp = tmp.left;
        } else tmp = tmp.right;
      }
    }
    return null;
  }

  remove(data) {
    let tmp = this.list;

    const findParent = (obj) => {                                    // find parent of del element
      while (obj.data) {
        if (obj.left && obj.right && (obj.left.data == data  || obj.right.data == data)) {
          return obj
        } else {
          if (obj.left && data < obj.data) {
            obj = obj.left;
         } else if (obj.right && data > obj.data) {
            obj = obj.right;
         } else return null
       }
      }
      return null;
    }

    let parent = findParent(tmp);
    if (parent==null) return;
    let del;
    parent.left.data == data ? del = parent.left : del = parent.right;

    

    if (del.left==null && del.right==null) {                          // 1 variant : del has no child
      parent.left.data == data ? parent.left = null : parent.right = null;
    } else if (del.left==null || del.right==null) {                   // 2 variant : del has 1 child
      let child;
      del.left ? child = del.left : child = del.right;
      parent.left.data == data ? parent.left = child : parent.right = child;
    } else {                                                          // 3 variant : del has 2 child
      let lastRightLeft = del.right;

      while(lastRightLeft.left.left !== null) {
        lastRightLeft = lastRightLeft.left;
      }
      del.data = lastRightLeft.left.data;
      lastRightLeft.left = null;
    }                         
  }  
    


  

  min() {
    let tmp = this.list;
    let min = Infinity;
    while (tmp.data !== null) {
      if (tmp.data < min) {
        min = tmp.data;
      } else tmp = tmp.left;
    }
    min == Infinity ? null : min;
  }
    
  

  max() {
    let tmp = this.list;
    let max = -Infinity;

    while (tmp.data !== null) {
      if (tmp.data > max) {
        max = tmp.data;
      } else tmp = tmp.right;
    }
    max == -Infinity ? null : max;
  }

}
module.exports = {
  BinarySearchTree
};