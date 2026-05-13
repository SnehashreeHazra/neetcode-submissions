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
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
    if (!head || !head.next) return;

    // step 1: find middle
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // step 2: reverse second half
    let prev = null;
    let curr = slow.next;
    slow.next = null; // cut list in half

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // step 3: merge two halves
    let l1 = head;
    let l2 = prev; // head of reversed second half

    while (l2) {
        const next1 = l1.next;
        const next2 = l2.next;
        l1.next = l2;
        l2.next = next1;
        l1 = next1;
        l2 = next2;
    }
    }
}
