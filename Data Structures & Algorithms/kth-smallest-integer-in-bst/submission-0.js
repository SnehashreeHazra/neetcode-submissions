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
    kthSmallest(root, k) {
        let count = 0;
        let result = 0;

        const inorder = (node) => {
            if (!node) return;
            inorder(node.left);
            count++;
            if (count === k) {
                result = node.val;
                return;
            }
            inorder(node.right);
        };

        inorder(root);
        return result;
    }
}
