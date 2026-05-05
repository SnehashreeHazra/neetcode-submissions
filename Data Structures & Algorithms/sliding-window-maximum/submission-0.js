class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (!nums.length || k === 0) return [];

        let deque = []; // stores indices
        let result = [];

        for (let i = 0; i < nums.length; i++) {

            // Remove indices out of current window
            while (deque.length && deque[0] <= i - k) {
                deque.shift();
            }

            // Maintain decreasing order in deque
            while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
                deque.pop();
            }

            // Add current index
            deque.push(i);

            // Start adding results when first window is ready
            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}
