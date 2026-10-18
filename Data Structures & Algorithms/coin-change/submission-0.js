class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // dp[a] = fewest coins needed to make amount a; Infinity means "not reachable yet"
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0; // zero coins make amount 0

        for (let a = 1; a <= amount; a++) {
            for (const coin of coins) {
                if (coin <= a && dp[a - coin] + 1 < dp[a]) {
                    dp[a] = dp[a - coin] + 1;
                }
            }
        }

        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}