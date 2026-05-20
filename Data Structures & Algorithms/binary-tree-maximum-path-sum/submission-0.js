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
    maxPathSum(root) {
        let max = -Infinity;

        const dfs = (node) => {
            if (!node) return 0;

            const left  = Math.max(0, dfs(node.left));
            const right = Math.max(0, dfs(node.right));

            max = Math.max(max, left + right + node.val);

            return node.val + Math.max(left, right);
        };

        dfs(root);
        return max;
    }
}
