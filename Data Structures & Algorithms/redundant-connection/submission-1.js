class Solution {
    findRedundantConnection(edges) {
        const n = edges.length;
        const parent = Array.from({ length: n + 1 }, (_, i) => i);
        const rank = new Array(n + 1).fill(1);

        const find = (x) => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };

        const union = (x, y) => {
            const px = find(x), py = find(y);
            if (px === py) return false; // already connected = cycle!
            if (rank[px] >= rank[py]) {
                parent[py] = px;
                rank[px] += rank[py];
            } else {
                parent[px] = py;
                rank[py] += rank[px];
            }
            return true;
        };

        for (const [a, b] of edges) {
            if (!union(a, b)) return [a, b]; // this edge caused the cycle
        }
    }
}