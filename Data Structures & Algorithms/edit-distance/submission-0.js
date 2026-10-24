class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        // keep the shorter word along the row so the DP row stays small
        if (word2.length > word1.length) [word1, word2] = [word2, word1];

        const m = word1.length;
        const n = word2.length;

        // prev[j] = edit distance between word1[0..i-1) and word2[0..j)
        let prev = new Array(n + 1);
        let curr = new Array(n + 1);
        for (let j = 0; j <= n; j++) prev[j] = j; // turning "" into word2[0..j) takes j insertions

        for (let i = 1; i <= m; i++) {
            curr[0] = i; // turning word1[0..i) into "" takes i deletions
            for (let j = 1; j <= n; j++) {
                if (word1[i - 1] === word2[j - 1]) {
                    curr[j] = prev[j - 1]; // the characters already match, so no operation is needed
                } else {
                    curr[j] = 1 + Math.min(
                        prev[j - 1], // replace
                        prev[j],     // delete from word1
                        curr[j - 1]  // insert into word1
                    );
                }
            }
            [prev, curr] = [curr, prev];
        }

        return prev[n];
    }
}