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
     * @return {boolean}
     */
    isBalanced(root) {
        const check = (node) => {
            if (!node) return 0;

            const left  = check(node.left);
            const right = check(node.right);

            if (left === -1 || right === -1) return -1;       // already unbalanced
            if (Math.abs(left - right) > 1)  return -1;       // unbalanced here

            return 1 + Math.max(left, right); // return height
        };

        return check(root) !== -1;
    }
}
