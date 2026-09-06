class Solution {
    leastInterval(tasks, n) {
        // Step 1: Count frequencies
        const freq = {};
        for (let t of tasks) freq[t] = (freq[t] || 0) + 1;

        // Step 2: Max-heap (simulate with sorted array)
        // Each entry: count (negated for max-heap simulation)
        let maxHeap = Object.values(freq).map(v => -v);
        maxHeap.sort((a, b) => a - b); // smallest negative = highest count

        // Step 3: Cooldown queue → [count, availableAtTime]
        const queue = [];
        let time = 0;

        while (maxHeap.length > 0 || queue.length > 0) {
            time++;

            if (maxHeap.length > 0) {
                // Pick most frequent available task
                const count = maxHeap.shift() + 1; // increment (less negative = one less task)
                if (count < 0) {
                    // Still has remaining count, put in cooldown
                    queue.push([count, time + n]);
                }
            } else {
                // CPU idle — jump time to next available task
                time = queue[0][1];
            }

            // Release tasks whose cooldown has expired
            if (queue.length > 0 && queue[0][1] === time) {
                const [cnt] = queue.shift();
                maxHeap.push(cnt);
                maxHeap.sort((a, b) => a - b);
            }
        }

        return time;
    }
}
