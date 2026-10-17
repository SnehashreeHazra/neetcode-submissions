class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let gotX = false;
        let gotY = false;
        let gotZ = false;

        for (const [a, b, c] of triplets) {
            // a triplet with any value above the target can never be used,
            // because merging takes maximums and that value could never come back down
            if (a > target[0] || b > target[1] || c > target[2]) continue;

            if (a === target[0]) gotX = true;
            if (b === target[1]) gotY = true;
            if (c === target[2]) gotZ = true;
        }

        return gotX && gotY && gotZ;
    }
}