class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freq = {};

        for (const c of s) {
            freq[c] = (freq[c] || 0) + 1;
        }

        for (const c of t) {
            if (!freq[c]) return false;
            freq[c]--;
        }

        return true;
    }
}
