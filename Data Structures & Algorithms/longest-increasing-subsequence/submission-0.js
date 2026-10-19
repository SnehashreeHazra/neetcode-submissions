class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // tails[k] = smallest possible last value of a strictly increasing subsequence of length k + 1
        const tails = [];

        for (const x of nums) {
            // find the first position whose value is >= x (binary search)
            let lo = 0;
            let hi = tails.length;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (tails[mid] < x) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            tails[lo] = x; // either extends the longest subsequence or lowers an existing tail
        }

        return tails.length;
    }
}