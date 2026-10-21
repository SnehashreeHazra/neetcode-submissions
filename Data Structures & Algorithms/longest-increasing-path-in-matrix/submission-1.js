class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;

        const indegree = Array.from(
            { length: m },
            () => Array(n).fill(0)
        );

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];

        // Calculate indegree for each cell.
        // Edges go from smaller values to larger values.
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 && nr < m &&
                        nc >= 0 && nc < n &&
                        matrix[nr][nc] < matrix[r][c]
                    ) {
                        indegree[r][c]++;
                    }
                }
            }
        }

        // Start with local minima (indegree 0).
        const queue = [];
        let front = 0;

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (indegree[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        let length = 0;

        // Process one topological layer at a time.
        while (front < queue.length) {
            const size = queue.length - front;
            length++;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue[front++];

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 && nr < m &&
                        nc >= 0 && nc < n &&
                        matrix[nr][nc] > matrix[r][c]
                    ) {
                        indegree[nr][nc]--;

                        if (indegree[nr][nc] === 0) {
                            queue.push([nr, nc]);
                        }
                    }
                }
            }
        }

        return length;
    }
}