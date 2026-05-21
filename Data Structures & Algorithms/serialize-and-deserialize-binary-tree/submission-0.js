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

class Codec {
    serialize(root) {
        const result = [];

        const dfs = (node) => {
            if (!node) {
                result.push('N');
                return;
            }
            result.push(String(node.val));
            dfs(node.left);
            dfs(node.right);
        };

        dfs(root);
        return result.join(',');
    }

    deserialize(data) {
        const vals = data.split(',');
        let i = 0;

        const dfs = () => {
            if (vals[i] === 'N') {
                i++;
                return null;
            }
            const node = new TreeNode(Number(vals[i++]));
            node.left  = dfs();
            node.right = dfs();
            return node;
        };

        return dfs();
    }
}
