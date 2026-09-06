class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        const inMST = new Array(n).fill(false);
        const minDist = new Array(n).fill(Infinity);
        minDist[0] = 0;

        let totalCost = 0;

        for (let iter = 0; iter < n; iter++) {
            // find the unvisited point with the smallest current distance
            let u = -1;
            for (let i = 0; i < n; i++) {
                if (!inMST[i] && (u === -1 || minDist[i] < minDist[u])) {
                    u = i;
                }
            }

            inMST[u] = true;
            totalCost += minDist[u];

            // update distances for all other unvisited points based on this new addition
            for (let v = 0; v < n; v++) {
                if (!inMST[v]) {
                    const dist = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
                    if (dist < minDist[v]) {
                        minDist[v] = dist;
                    }
                }
            }
        }

        return totalCost;
    }
}