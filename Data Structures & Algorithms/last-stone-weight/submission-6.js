class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1) {
            stones.sort((a, b) => a - b);

            let y = stones.pop(); // largest
            let x = stones.pop(); // second largest

            if (y !== x) {
                stones.push(y - x);
            }
        }

        return stones.length ? stones[0] : 0;
    }
}
