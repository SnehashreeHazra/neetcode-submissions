class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";

        const m = num1.length, n = num2.length;
        const result = new Array(m + n).fill(0);

        // Traverse both numbers from the last digit to the first
        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                const digit1 = num1.charCodeAt(i) - 48; // '0' is 48 in ASCII
                const digit2 = num2.charCodeAt(j) - 48;
                const product = digit1 * digit2;

                const pos1 = i + j;      // higher place value
                const pos2 = i + j + 1;  // lower place value

                const sum = product + result[pos2];

                result[pos2] = sum % 10;
                result[pos1] += Math.floor(sum / 10);
            }
        }

        // Remove leading zeros
        let start = 0;
        while (start < result.length - 1 && result[start] === 0) {
            start++;
        }

        return result.slice(start).join('');
    }
}