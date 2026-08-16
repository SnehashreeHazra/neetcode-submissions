class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let prev2 = 0; // best amount considering houses up to i-2
        let prev1 = 0; // best amount considering houses up to i-1

        for (let i = 0; i < nums.length; i++) {
            const current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}