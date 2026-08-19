class Solution {
    findKthLargest(nums, k) {
        // kth largest = (n - k)th smallest index after partition
        const target = nums.length - k;

        const quickSelect = (left, right) => {
            const pivot = nums[right];
            let p = left;

            for (let i = left; i < right; i++) {
                if (nums[i] <= pivot) {
                    [nums[p], nums[i]] = [nums[i], nums[p]];
                    p++;
                }
            }
            [nums[p], nums[right]] = [nums[right], nums[p]];

            if (p === target) return nums[p];
            if (p < target)   return quickSelect(p + 1, right);
            else              return quickSelect(left, p - 1);
        };

        return quickSelect(0, nums.length - 1);
    }
}
