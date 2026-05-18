/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    rightSideView(root) {
        if (!root) return [];

        const result = [];
        const queue = [root];

        while (queue.length) {
            const levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();

                if (i === levelSize - 1) result.push(node.val);

                if (node.left)  queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        return result;
    }
}
