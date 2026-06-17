class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {boolean}
     */
    validTree(n, edges) {
        // A tree with n nodes must have exactly n - 1 edges
        if (edges.length !== n - 1) {
            return false;
        }

        const parent = new Array(n);

        for (let i = 0; i < n; i++) {
            parent[i] = i;
        }

        function find(x) {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]); // Path compression
            }
            return parent[x];
        }

        function union(x, y) {
            const rootX = find(x);
            const rootY = find(y);

            if (rootX === rootY) {
                return false; // Cycle found
            }

            parent[rootY] = rootX;
            return true;
        }

        for (const [u, v] of edges) {
            if (!union(u, v)) {
                return false;
            }
        }

        return true;
    }
}
