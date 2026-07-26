class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const INT_MAX = 2147483647;      // 2^31 - 1
    const INT_MIN = -2147483648;     // -2^31

    let result = 0;
    let num = x;

    while (num !== 0) {
        const digit = num % 10;      // works for negative too, e.g. -1234 % 10 = -4
        num = (num - digit) / 10;    // trim off the last digit, avoids truncation issues

        result = result * 10 + digit;

        if (result > INT_MAX || result < INT_MIN) {
            return 0;
        }
    }

    return result;
    }
}
