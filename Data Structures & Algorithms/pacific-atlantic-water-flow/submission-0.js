class Solution {
    pacificAtlantic(heights) {
        this.rows = heights.length;
        this.cols = heights[0].length;
        this.heights = heights;
        this.directions = [[1,0], [-1,0], [0,1], [0,-1]];

        const pacificQueue  = [];
        const atlanticQueue = [];

        // Seed border cells into respective queues
        for (let r = 0; r < this.rows; r++) {
            pacificQueue.push([r, 0]);               // left border  → Pacific
            atlanticQueue.push([r, this.cols - 1]);  // right border → Atlantic
        }
        for (let c = 0; c < this.cols; c++) {
            pacificQueue.push([0, c]);               // top border    → Pacific
            atlanticQueue.push([this.rows - 1, c]);  // bottom border → Atlantic
        }

        // BFS from each ocean's border going uphill
        const pacificReach  = this.bfs(pacificQueue);
        const atlanticReach = this.bfs(atlanticQueue);

        // Cells reachable by BOTH = answer
        return this.findIntersection(pacificReach, atlanticReach);
    }

    bfs(queue) {
        const visited = Array.from(
            { length: this.rows }, 
            () => new Array(this.cols).fill(false)
        );

        // Mark all seed (border) cells as visited
        for (const [r, c] of queue) {
            visited[r][c] = true;
        }

        while (queue.length > 0) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of this.directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (!this.isValid(nr, nc, visited)) continue;

                // Go uphill only — water flows downhill,
                // so reverse-BFS climbs uphill
                if (this.heights[nr][nc] < this.heights[r][c]) continue;

                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }
        }

        return visited;
    }

    isValid(r, c, visited) {
        return (
            r >= 0 && r < this.rows &&
            c >= 0 && c < this.cols &&
            !visited[r][c]
        );
    }

    findIntersection(pacific, atlantic) {
        const result = [];

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}