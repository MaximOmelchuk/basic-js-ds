const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {

  if (l.value == k) {
    l = l.next;
  }

  const f = (obj) => {

    if (obj == null) return;

    if (obj.value == k) {
    obj = obj.next;
    f(obj);
    } else f(obj.next);
  }

   f(l);
   return l;
}












function removeKFromList(l, k) {

  if (l.value == k) {
    l = l.next;
  }

  const f = (obj) => {
   if (obj.value == k) {
    obj = obj.next;
    f(obj)
   } 

   if (obj.next !== null) {
     if (obj.next.value == k) {
       obj.next = obj.next.next;
       if (obj.next) {
         f(obj);
      } else return;
       if (obj.next.value == k) f(obj);
     } else f(obj.next);
   }
 }

   f(l);
   return l
}






//  function removeKFromList(l, k) {
//    if (l.value == k) l = l.next;

//    const f = (obj) => {
//     if (obj.value == k) obj = obj.next;

//     if (obj.next !== null) {
//       if (obj.next.value == k) {
//         obj.next = obj.next.next;
//       } 
//       f(obj.next)
//     }
//   }

//     f(l);
//     return l
// }

module.exports = {
  removeKFromList
};
