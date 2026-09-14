class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        const n = intervals.length;
        const q = queries.length;

        // sort intervals by left endpoint
        intervals.sort((a, b) => a[0] - b[0]);

        // sort queries, keeping track of original indices
        const sortedQueries = queries
            .map((val, idx) => [val, idx])
            .sort((a, b) => a[0] - b[0]);

        const result = new Array(q).fill(-1);

        // simple binary min-heap keyed by interval length, storing [length, right]
        const heap = [];

        function heapPush(item) {
            heap.push(item);
            let i = heap.length - 1;
            while (i > 0) {
                const parent = (i - 1) >> 1;
                if (heap[parent][0] <= heap[i][0]) break;
                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        }

        function heapPop() {
            const top = heap[0];
            const last = heap.pop();
            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;
                while (true) {
                    let left = 2 * i + 1;
                    let right = 2 * i + 2;
                    let smallest = i;
                    if (left < heap.length && heap[left][0] < heap[smallest][0]) smallest = left;
                    if (right < heap.length && heap[right][0] < heap[smallest][0]) smallest = right;
                    if (smallest === i) break;
                    [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
                    i = smallest;
                }
            }
            return top;
        }

        let ptr = 0;

        for (const [queryVal, origIdx] of sortedQueries) {
            // push every interval whose left endpoint is <= this query
            while (ptr < n && intervals[ptr][0] <= queryVal) {
                const [l, r] = intervals[ptr];
                heapPush([r - l + 1, r]);
                ptr++;
            }

            // pop any intervals from the heap whose right endpoint is already
            // behind this query — they can never satisfy this or any later query
            while (heap.length > 0 && heap[0][1] < queryVal) {
                heapPop();
            }

            if (heap.length > 0) {
                result[origIdx] = heap[0][0];
            }
        }

        return result;
    }
}