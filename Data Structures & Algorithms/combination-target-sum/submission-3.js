class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

    function backtrack(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]); 
            return;
        }
        if (remaining < 0) return; 

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i, current, remaining - nums[i]); 
            current.pop();
        }
    }

    backtrack(0, [], target);
    return result;
    }
}
