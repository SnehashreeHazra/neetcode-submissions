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
    isValidBST(root) {
        const validate = (node, min, max) => {
            if (!node) return true;
            if (node.val <= min || node.val >= max) return false;

            return validate(node.left,  min, node.val) &&
                   validate(node.right, node.val, max);
        };

        return validate(root, -Infinity, Infinity);
    }
}
