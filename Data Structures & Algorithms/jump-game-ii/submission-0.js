class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let jumps = 0;
        let currentEnd = 0;
        let farthest = 0;

        // No need to process the last index; we're already there
        for (let i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);

            // Reached the edge of the current jump's range
            if (i === currentEnd) {
                jumps++;
                currentEnd = farthest;
            }
        }

        return jumps;
    }
}