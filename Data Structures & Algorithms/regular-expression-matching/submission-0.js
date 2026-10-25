class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const m = s.length;
        const n = p.length;

        // dp[i][j] = true if the first i characters of s match the first j characters of p
        const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
        dp[0][0] = true; // the empty string matches the empty pattern

        // an empty string can still match patterns like "a*" or "a*b*"
        for (let j = 2; j <= n; j++) {
            if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];
        }

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (p[j - 1] === '*') {
                    // option 1: "x*" matches zero characters, so drop the pair
                    dp[i][j] = dp[i][j - 2];
                    // option 2: "x*" absorbs one more character, if x fits the current character of s
                    const prev = p[j - 2];
                    if (prev === '.' || prev === s[i - 1]) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                } else if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }

        return dp[m][n];
    }
}