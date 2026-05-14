// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
    if (!head) return null;

    const map = new Map(); // old node → new node

    // pass 1: create all new nodes
    let curr = head;
    while (curr) {
        map.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    // pass 2: wire next and random
    curr = head;
    while (curr) {
        const copy = map.get(curr);
        copy.next   = curr.next   ? map.get(curr.next)   : null;
        copy.random = curr.random ? map.get(curr.random) : null;
        curr = curr.next;
    }

    return map.get(head);
    }
}
