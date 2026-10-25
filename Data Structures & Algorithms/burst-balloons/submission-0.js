class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        // pad both ends with a virtual balloon of value 1
        const a = [1, ...nums, 1];
        const n = a.length;

        // dp[l][r] = most coins from bursting every balloon strictly between l and r
        const dp = Array.from({ length: n }, () => new Array(n).fill(0));

        for (let len = 2; len < n; len++) {          // distance between the two boundary balloons
            for (let l = 0; l + len < n; l++) {
                const r = l + len;
                for (let k = l + 1; k < r; k++) {
                    // k is the LAST balloon to burst in (l, r), so l and r are still its neighbors
                    const coins = dp[l][k] + a[l] * a[k] * a[r] + dp[k][r];
                    if (coins > dp[l][r]) dp[l][r] = coins;
                }
            }
        }

        return dp[0][n - 1];
    }
}