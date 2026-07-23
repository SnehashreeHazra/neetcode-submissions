class Solution {
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let count = 0;

        const dfs = (r, c) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols) return;
            if (grid[r][c] === "0") return;

            grid[r][c] = "0"; // sink the land
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    count++;
                    dfs(r, c);
                }
            }
        }

        return count;
    }
}
