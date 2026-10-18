class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length;
        if (n === 0) return 0;

        // ways(i) = number of ways to decode the suffix s[i..], with ways(n) = 1
        let next = 1;  // ways(i + 1), starting as ways(n)
        let next2 = 0; // ways(i + 2), unused on the first step

        for (let i = n - 1; i >= 0; i--) {
            let cur = 0;

            if (s[i] !== '0') {
                cur += next; // s[i] alone, as a digit 1-9

                if (i + 1 < n) {
                    const two = (s.charCodeAt(i) - 48) * 10 + (s.charCodeAt(i + 1) - 48);
                    if (two <= 26) cur += next2; // s[i] and s[i+1] together, as 10-26
                }
            }

            next2 = next;
            next = cur;
        }

        return next;
    }
}