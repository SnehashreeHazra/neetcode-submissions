class Solution {
    networkDelayTime(times, n, k) {
        // Build adjacency list
        const graph = new Map();
        for (let i = 1; i <= n; i++) graph.set(i, []);
        
        for (const [u, v, w] of times) {
            graph.get(u).push([v, w]);
        }

        // Min-heap simulation using a sorted array
        // [distance, node]
        const minHeap = [[0, k]];
        const dist = new Map();

        while (minHeap.length > 0) {
            // Sort to simulate min-heap (pop smallest distance)
            minHeap.sort((a, b) => a[0] - b[0]);
            const [d, node] = minHeap.shift();

            // Already visited with shorter path
            if (dist.has(node)) continue;
            dist.set(node, d);

            for (const [neighbor, weight] of graph.get(node)) {
                if (!dist.has(neighbor)) {
                    minHeap.push([d + weight, neighbor]);
                }
            }
        }

        // All n nodes must be reachable
        if (dist.size !== n) return -1;

        // Answer is the MAXIMUM of all shortest distances
        return Math.max(...dist.values());
    }
}