class Solution {
    countComponents(n, edges) {
        const parent = Array.from({ length: n }, (_, i) => i);
        const rank = new Array(n).fill(1);

        const find = (x) => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]]; // path compression
                x = parent[x];
            }
            return x;
        };

        const union = (x, y) => {
            const px = find(x), py = find(y);
            if (px === py) return 0;
            if (rank[px] >= rank[py]) {
                parent[py] = px;
                rank[px] += rank[py];
            } else {
                parent[px] = py;
                rank[py] += rank[px];
            }
            return 1;
        };

        let components = n;
        for (const [a, b] of edges) {
            components -= union(a, b);
        }
        return components;
    }
}
