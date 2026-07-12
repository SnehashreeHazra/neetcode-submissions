class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        // Handle negative powers: x^-n = 1 / x^n
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }

        let result = 1;
        let base = x;

        while (n > 0) {
            // If current bit is 1, multiply result by base
            if (n % 2 === 1) {
                result *= base;
            }
            // Square the base and halve n (shift right)
            base *= base;
            n = Math.floor(n / 2);
        }

        return result;
    }
}