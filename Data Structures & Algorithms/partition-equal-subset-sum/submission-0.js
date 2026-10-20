class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0;
        for (const x of nums) total += x;

        // an odd total can never split into two equal integer halves
        if (total % 2 !== 0) return false;

        const target = total / 2;

        // reachable[s] = true if some subset of the numbers seen so far sums to s
        const reachable = new Array(target + 1).fill(false);
        reachable[0] = true; // the empty subset sums to 0

        for (const x of nums) {
            // go downward so each number is used at most once
            for (let s = target; s >= x; s--) {
                if (reachable[s - x]) reachable[s] = true;
            }
            if (reachable[target]) return true; // found a subset with half the total
        }

        return reachable[target];
    }
}