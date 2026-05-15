class Solution {
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;

        while (lists.length > 1) {
            const merged = [];
            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = lists[i + 1] || null;
                merged.push(this.mergeTwoLists(l1, l2));
            }
            lists = merged;
        }

        return lists[0];
    }

    mergeTwoLists(l1, l2) {
        let dummy = new ListNode(0);
        let curr = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        curr.next = l1 || l2;
        return dummy.next;
    }
}