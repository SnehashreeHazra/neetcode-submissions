class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const words = new Set(wordDict);
        let maxLen = 0;
        for (const w of words) if (w.length > maxLen) maxLen = w.length;

        const n = s.length;
        // dp[i] = true if the first i characters of s can be split into dictionary words
        const dp = new Array(n + 1).fill(false);
        dp[0] = true; // the empty prefix is always valid

        for (let i = 1; i <= n; i++) {
            // a piece longer than the longest word can never match, so don't look back further
            for (let j = i - 1; j >= Math.max(0, i - maxLen); j--) {
                if (dp[j] && words.has(s.slice(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n];
    }
}