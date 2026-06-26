class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0);

    // count freq of s1
    for (const c of s1) {
        need[c.charCodeAt(0) - a]++;
    }

    const k = s1.length;

    for (let right = 0; right < s2.length; right++) {
        // add right char to window
        window[s2[right].charCodeAt(0) - a]++;

        // remove left char when window exceeds size k
        if (right >= k) {
            window[s2[right - k].charCodeAt(0) - a]--;
        }

        // compare freq arrays
        if (need.join('') === window.join('')) return true;
    }

    return false;
    }
}
