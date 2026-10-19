class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let curMax = nums[0]; // largest product of a subarray ending at the current index
        let curMin = nums[0]; // smallest (most negative) product of a subarray ending here
        let best = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const x = nums[i];
            // a negative x swaps the roles of the max and the min,
            // so compute both candidates from the old values first
            const a = curMax * x;
            const b = curMin * x;
            curMax = Math.max(x, a, b);
            curMin = Math.min(x, a, b);
            if (curMax > best) best = curMax;
        }

        return best;
    }
}