class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];
        const current = [];

        const isPalin = (str, l, r) => {
            while (l < r) {
                if (str[l] !== str[r]) return false;
                l++; r--;
            }
            return true;
        };

        const backtrack = (start) => {
            if (start === s.length) {
                result.push([...current]);
                return;
            }

            for (let end = start; end < s.length; end++) {
                if (isPalin(s, start, end)) {
                    current.push(s.slice(start, end + 1));
                    backtrack(end + 1);
                    current.pop();
                }
            }
        };

        backtrack(0);
        return result;
    }
}
