class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        // [lo, hi] = range of possible counts of still-unmatched '(' after reading each character
        let lo = 0;
        let hi = 0;

        for (const ch of s) {
            if (ch === '(') {
                lo++;
                hi++;
            } else if (ch === ')') {
                lo--;
                hi--;
            } else { // '*' can be '(' (count + 1), ')' (count - 1), or empty (no change)
                lo--;
                hi++;
            }

            if (hi < 0) return false; // even treating every '*' as '(' there are too many ')'
            if (lo < 0) lo = 0;       // a count below zero isn't possible, so clamp it
        }

        return lo === 0; // valid if zero unmatched '(' is one of the reachable counts
    }
}