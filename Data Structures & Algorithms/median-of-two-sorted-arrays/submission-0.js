class Solution {
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        const m = nums1.length, n = nums2.length;
        let left = 0, right = m;
        const half = Math.floor((m + n + 1) / 2); // ← +1 fix

        while (left <= right) {
            const i = Math.floor((left + right) / 2);
            const j = half - i;

            const nums1Left  = i === 0 ? -Infinity : nums1[i - 1];
            const nums1Right = i === m ?  Infinity : nums1[i];
            const nums2Left  = j === 0 ? -Infinity : nums2[j - 1];
            const nums2Right = j === n ?  Infinity : nums2[j];

            if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
                if ((m + n) % 2 === 1) {
                    return Math.max(nums1Left, nums2Left);
                } else {
                    return (Math.max(nums1Left, nums2Left) +
                            Math.min(nums1Right, nums2Right)) / 2;
                }
            } else if (nums1Left > nums2Right) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }
    }
}