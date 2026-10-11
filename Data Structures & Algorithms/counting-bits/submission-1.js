class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const output = new Array(n + 1).fill(0);
        
        for (let i = 1; i <= n; i++) {
            output[i] = output[i >> 1] + (i & 1);
        }
        
        return output;
    }
}