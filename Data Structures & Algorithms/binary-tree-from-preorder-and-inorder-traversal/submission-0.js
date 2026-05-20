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
    buildTree(preorder, inorder) {
        const map = new Map();
        inorder.forEach((val, idx) => map.set(val, idx));

        let pre = 0;

        const build = (left, right) => {
            if (left > right) return null;

            const rootVal = preorder[pre++];
            const root = new TreeNode(rootVal);
            const mid = map.get(rootVal);

            root.left  = build(left, mid - 1);
            root.right = build(mid + 1, right);

            return root;
        };

        return build(0, inorder.length - 1);
    }
}
