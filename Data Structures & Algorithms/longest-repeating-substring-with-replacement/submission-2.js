class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = {};
    let left = 0;
    let maxFreq = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        freq[c] = (freq[c] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[c]);

        // window size - most frequent char = chars to replace
        while ((right - left + 1) - maxFreq > k) {
            freq[s[left]]--;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
    }
}
