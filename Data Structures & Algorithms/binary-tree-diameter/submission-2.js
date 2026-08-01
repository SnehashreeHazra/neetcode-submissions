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
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const depth = (node) => {
            if (!node) return 0;
            const left  = depth(node.left);
            const right = depth(node.right);
            diameter = Math.max(diameter, left + right);
            return 1 + Math.max(left, right);
        };

        depth(root);
        return diameter;
    }
}
