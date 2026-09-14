class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length === 0) return 0;

        // sort by end time — a greedy classic for interval scheduling
        intervals.sort((a, b) => a[1] - b[1]);

        let count = 0;
        let lastEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < lastEnd) {
                // overlaps with the last kept interval — remove this one
                count++;
            } else {
                // no overlap — keep it, and update the tracking end
                lastEnd = intervals[i][1];
            }
        }

        return count;
    }
}