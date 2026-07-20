class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let prev2 = cost[0];
        let prev1 = cost[1];

        for (let i = 2; i < cost.length; i++) {
            let curr = cost[i] + Math.min(prev1, prev2);
            prev2 = prev1;
            prev1 = curr;
        }

        // Top is past the last index — can arrive from last or second-last
        return Math.min(prev1, prev2);
    }
}