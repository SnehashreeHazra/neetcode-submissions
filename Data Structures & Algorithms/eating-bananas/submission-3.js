class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (this.canFinish(piles, mid, h)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    canFinish(piles, k, h) {
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / k);
        }
        return hours <= h;
    }
}
