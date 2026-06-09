class Solution {
    orangesRotting(grid) {
        this.rows = grid.length;
        this.cols = grid[0].length;
        
        const { queue, fresh } = this.initialize(grid);
        return this.bfs(grid, queue, fresh);
    }

    initialize(grid) {
        const queue = [];
        let fresh = 0;

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (grid[r][c] === 2) queue.push([r, c]);
                if (grid[r][c] === 1) fresh++;
            }
        }

        return { queue, fresh };
    }

    bfs(grid, queue, fresh) {
        if (fresh === 0) return 0;

        const directions = [[1,0], [-1,0], [0,1], [0,-1]];
        let minutes = 0;

        while (queue.length > 0 && fresh > 0) {
            const size = queue.length;
            minutes++;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (!this.isValid(nr, nc, grid)) continue;

                    grid[nr][nc] = 2;
                    fresh--;
                    queue.push([nr, nc]);
                }
            }
        }

        return fresh === 0 ? minutes : -1;
    }

    isValid(r, c, grid) {
        return (
            r >= 0 && r < this.rows &&
            c >= 0 && c < this.cols &&
            grid[r][c] === 1
        );
    }
}
