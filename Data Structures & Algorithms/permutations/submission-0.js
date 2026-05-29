class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];

        function backtrack(current, remaining) {
            if (remaining.length === 0) {
                result.push([...current]);
                return;
            }

            for (let i = 0; i < remaining.length; i++) {
                current.push(remaining[i]);
                backtrack(current, [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
                current.pop();
            }
        }

        backtrack([], nums);
        return result;
    }
}
