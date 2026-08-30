class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Step 1: count frequencies
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Step 2: bucket sort by frequency
    const bucket = Array.from({length: nums.length + 1}, () => []);
    for (const [num, count] of Object.entries(freq)) {
        bucket[count].push(num);
    }

    // Step 3: collect top k from highest frequency
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...bucket[i]);
    }

    return result.slice(0, k);
    }
}
