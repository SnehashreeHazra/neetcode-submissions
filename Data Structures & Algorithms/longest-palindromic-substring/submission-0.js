class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let start = 0;
        let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            // Odd-length palindrome
            let left = i;
            let right = i;

            while (
                left >= 0 &&
                right < s.length &&
                s[left] === s[right]
            ) {
                if (right - left + 1 > maxLength) {
                    start = left;
                    maxLength = right - left + 1;
                }

                left--;
                right++;
            }

            // Even-length palindrome
            left = i;
            right = i + 1;

            while (
                left >= 0 &&
                right < s.length &&
                s[left] === s[right]
            ) {
                if (right - left + 1 > maxLength) {
                    start = left;
                    maxLength = right - left + 1;
                }

                left--;
                right++;
            }
        }

        return s.substring(start, start + maxLength);
    }
}