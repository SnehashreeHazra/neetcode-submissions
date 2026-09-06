class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        const visited = Array.from({ length: n }, () => new Array(n).fill(false));

        // min-heap implemented as a simple array with linear extraction
        // (fine for typical constraints; a real heap would be faster for large n)
        const heap = [[grid[0][0], 0, 0]]; // [elevation, row, col]
        visited[0][0] = true;

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let ans = 0;

        while (heap.length > 0) {
            // extract the minimum-elevation cell
            let minIdx = 0;
            for (let i = 1; i < heap.length; i++) {
                if (heap[i][0] < heap[minIdx][0]) minIdx = i;
            }
            const [elevation, r, c] = heap.splice(minIdx, 1)[0];

            ans = Math.max(ans, elevation);

            if (r === n - 1 && c === n - 1) {
                return ans;
            }

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    heap.push([grid[nr][nc], nr, nc]);
                }
            }
        }

        return ans;
    }
}