class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let result = 0;
        
        for (let i = 0; i < 32; i++) {
            // Shift result left to make room, then add the last bit of n
            result = (result << 1) | (n & 1);
            // Shift n right to process the next bit
            n >>>= 1;
        }
        
        // >>> 0 converts to unsigned 32-bit integer
        return result >>> 0;
    }
}