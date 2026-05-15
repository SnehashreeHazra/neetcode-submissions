/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    reverseKGroup(head, k) {
        let count = 0;
        let node = head;
        while (node && count < k) {
            node = node.next;
            count++;
        }
        if (count < k) return head;

        let prev = null;
        let curr = head;
        for (let i = 0; i < k; i++) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        head.next = this.reverseKGroup(curr, k);
        return prev;
    }
}
