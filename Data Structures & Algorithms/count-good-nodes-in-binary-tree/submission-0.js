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
    goodNodes(root) {
        const dfs = (node, maxSoFar) => {
            if (!node) return 0;

            const isGood = node.val >= maxSoFar ? 1 : 0;
            const newMax = Math.max(maxSoFar, node.val);

            return isGood + dfs(node.left, newMax) + dfs(node.right, newMax);
        };

        return dfs(root, -Infinity);
    }
}
