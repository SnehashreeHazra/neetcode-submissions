class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = new Array(amount + 1).fill(0);

        dp[0] = 1;

        for (const coin of coins) {
            for (let current = coin; current <= amount; current++) {
                dp[current] += dp[current - coin];
            }
        }

        return dp[amount];
    }
}