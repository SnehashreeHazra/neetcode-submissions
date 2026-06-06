class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    const INF = 2147483647;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let head = 0;

    while (head < queue.length) {
        const [r, c] = queue[head++];

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === INF) {
                grid[nr][nc] = grid[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
}
}
