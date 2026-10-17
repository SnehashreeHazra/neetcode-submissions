class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        // count how many copies of each card value we have
        const count = new Map();
        for (const card of hand) {
            count.set(card, (count.get(card) || 0) + 1);
        }

        // process distinct values from smallest to largest
        const values = Array.from(count.keys()).sort((a, b) => a - b);

        for (const start of values) {
            const need = count.get(start);
            if (need === 0) continue; // already used up by earlier groups

            // every copy of `start` must begin its own group,
            // so the next groupSize - 1 values each need `need` more copies
            for (let offset = 0; offset < groupSize; offset++) {
                const card = start + offset;
                const have = count.get(card) || 0;
                if (have < need) return false;
                count.set(card, have - need);
            }
        }

        return true;
    }
}