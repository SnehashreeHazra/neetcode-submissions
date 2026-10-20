class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold = -Infinity;
        let sold = 0;
        let rest = 0;

        for (let price of prices) {
            let prevHold = hold;
            let prevSold = sold;
            let prevRest = rest;

            hold = Math.max(prevHold, prevRest - price);
            sold = prevHold + price;
            rest = Math.max(prevRest, prevSold);
        }

        return Math.max(sold, rest);
    }
}