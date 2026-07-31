class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if (n === 1) return nums[0];
        if (n === 2) return Math.max(nums[0], nums[1]);

        // since first and last houses are adjacent in a circle,
        // you can never rob both — so solve two separate linear cases:
        // 1) exclude the last house entirely
        // 2) exclude the first house entirely
        // and take the better of the two
        const robLinear = (houses) => {
            let prev2 = 0;
            let prev1 = 0;
            for (let i = 0; i < houses.length; i++) {
                const current = Math.max(prev1, prev2 + houses[i]);
                prev2 = prev1;
                prev1 = current;
            }
            return prev1;
        };

        const excludeLast = robLinear(nums.slice(0, n - 1));
        const excludeFirst = robLinear(nums.slice(1, n));

        return Math.max(excludeLast, excludeFirst);
    }
}