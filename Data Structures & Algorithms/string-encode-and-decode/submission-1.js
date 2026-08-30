class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for (const str of strs) {
            result += str.length + '#' + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;

            const len = parseInt(str.slice(i, j));
            result.push(str.slice(j + 1, j + 1 + len));
            i = j + 1 + len;
        }

        return result;
    }
}