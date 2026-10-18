class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length;
        let count = 0;

        // grow outward from a center for as long as the two ends match
        const expand = (left, right) => {
            while (left >= 0 && right < n && s[left] === s[right]) {
                count++; // each successful step is one more palindromic substring
                left--;
                right++;
            }
        };

        for (let center = 0; center < n; center++) {
            expand(center, center);     // odd-length palindromes, centered on one character
            expand(center, center + 1); // even-length palindromes, centered between two characters
        }

        return count;
    }
}