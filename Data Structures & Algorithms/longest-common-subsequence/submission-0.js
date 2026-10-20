class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        // keep the shorter string along the row so the DP row stays small
        if (text2.length > text1.length) [text1, text2] = [text2, text1];

        const m = text1.length;
        const n = text2.length;

        // prev[j] = LCS length of text1[0..i-1) and text2[0..j)
        let prev = new Array(n + 1).fill(0);
        let curr = new Array(n + 1).fill(0);

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (text1[i - 1] === text2[j - 1]) {
                    curr[j] = prev[j - 1] + 1;                // characters match, extend the diagonal
                } else {
                    curr[j] = Math.max(prev[j], curr[j - 1]); // drop a character from one string or the other
                }
            }
            [prev, curr] = [curr, prev];
        }

        return prev[n];
    }
}