class CountSquares {
    constructor() {
        // Map: x -> Map(y -> count of points at (x, y))
        this.ptsCount = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const [x, y] = point;
        if (!this.ptsCount.has(x)) {
            this.ptsCount.set(x, new Map());
        }
        const yMap = this.ptsCount.get(x);
        yMap.set(y, (yMap.get(y) || 0) + 1);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [px, py] = point;
        if (!this.ptsCount.has(px)) return 0;

        const yMap = this.ptsCount.get(px);
        let ans = 0;

        // Look for a point (px, y2) sharing the same x — this forms one vertical side
        for (const [y2, cnt2] of yMap) {
            if (y2 === py) continue;

            const side = Math.abs(y2 - py);

            // The square can extend to the right or left
            for (const nx of [px + side, px - side]) {
                if (this.ptsCount.has(nx)) {
                    const m2 = this.ptsCount.get(nx);
                    const c1 = m2.get(py) || 0;
                    const c2 = m2.get(y2) || 0;
                    ans += cnt2 * c1 * c2;
                }
            }
        }

        return ans;
    }
}