class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let totalSurplus = 0;
        let currentTank = 0;
        let start = 0;

        for (let i = 0; i < gas.length; i++) {
            const diff = gas[i] - cost[i];
            totalSurplus += diff;
            currentTank += diff;

            // Can't reach station i+1 from the current start, so restart after i
            if (currentTank < 0) {
                start = i + 1;
                currentTank = 0;
            }
        }

        return totalSurplus >= 0 ? start : -1;
    }
}