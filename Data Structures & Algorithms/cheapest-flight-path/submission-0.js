class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const INF = Infinity;
        let prices = new Array(n).fill(INF);
        prices[src] = 0;

        // At most k stops means at most k + 1 flights
        for (let i = 0; i <= k; i++) {
            const temp = [...prices];

            for (const [from, to, price] of flights) {
                if (prices[from] !== INF) {
                    temp[to] = Math.min(
                        temp[to],
                        prices[from] + price
                    );
                }
            }

            prices = temp;
        }

        return prices[dst] === INF ? -1 : prices[dst];
    }
}