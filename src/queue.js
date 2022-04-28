const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.list = {};
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
  
    const f = (obj) => {
    	
     if (obj.value && obj.next) {
      f(obj.next);       
     } else if (obj.value) {
      obj.next = {};
      obj.next.value = value;
      obj.next.next = null;
     } else {
      obj.value = value;
      obj.next = null;
     }
    }
    
    f(this.list);
  }

  dequeue() {
    let tmp = this.list.value;
    this.list = this.list.next;
    return tmp;
  }


}

module.exports = {
  Queue
};
