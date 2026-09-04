class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];
        let i = 0;
        const n = intervals.length;

        // 1. Add intervals ending before newInterval starts
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            i++;
        }

        // 2. Merge all overlapping intervals
        let mergedStart = newInterval[0];
        let mergedEnd = newInterval[1];
        while (i < n && intervals[i][0] <= mergedEnd) {
            mergedStart = Math.min(mergedStart, intervals[i][0]);
            mergedEnd = Math.max(mergedEnd, intervals[i][1]);
            i++;
        }
        result.push([mergedStart, mergedEnd]);

        // 3. Add remaining intervals starting after newInterval ends
        while (i < n) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}