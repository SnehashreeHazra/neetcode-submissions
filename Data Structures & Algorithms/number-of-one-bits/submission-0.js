class Solution {
    hammingWeight(n) {
        let count = 0;
        while (n !== 0) {
            n = n & (n - 1); // drops the lowest set bit
            count++;
        }
        return count;
    }
}