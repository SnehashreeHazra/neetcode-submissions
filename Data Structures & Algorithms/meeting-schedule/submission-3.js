/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
    // Sort meetings by start time
    intervals.sort((a, b) => a.start - b.start);

    for (let i = 1; i < intervals.length; i++) {
        // If the current meeting starts before the previous one ends, conflict
        if (intervals[i].start < intervals[i - 1].end) {
            return false;
        }
    }

    return true;
}
}
