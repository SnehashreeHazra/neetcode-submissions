class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    const set = new Set(nums);
    let result = 0;

    for (const num of set) {
        // only start counting from the beginning of a sequence
        if (!set.has(num - 1)) {
            let length = 1;
            while (set.has(num + length)) {
                length++;
            }
            result = Math.max(result, length);
        }
    }

    return result;
    }
}
