class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length === 0) return [];

        // sort by start value first, since input here is NOT guaranteed sorted
        intervals.sort((a, b) => a[0] - b[0]);

        const result = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const current = intervals[i];
            const lastMerged = result[result.length - 1];

            if (current[0] <= lastMerged[1]) {
                // overlaps (or touches) the last merged interval, so extend it
                lastMerged[1] = Math.max(lastMerged[1], current[1]);
            } else {
                // no overlap, start a new merged interval
                result.push(current);
            }
        }

        return result;
    }
}