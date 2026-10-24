class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const m = t.length;
        if (m > s.length) return 0;

        // dp[j] = number of ways to pick t[0..j) as a subsequence of the part of s read so far
        const dp = new Array(m + 1).fill(0);
        dp[0] = 1; // the empty string can be formed in exactly one way

        for (let i = 0; i < s.length; i++) {
            // go from right to left so each character of s is used at most once per update
            for (let j = Math.min(i + 1, m); j >= 1; j--) {
                if (s[i] === t[j - 1]) {
                    dp[j] += dp[j - 1];
                }
            }
        }

        return dp[m];
    }
}