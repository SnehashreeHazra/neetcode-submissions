class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        // last position where each letter appears
        const last = new Array(26).fill(0);
        for (let i = 0; i < S.length; i++) {
            last[S.charCodeAt(i) - 97] = i;
        }

        const sizes = [];
        let start = 0; // where the current part begins
        let end = 0;   // the furthest position the current part is forced to reach

        for (let i = 0; i < S.length; i++) {
            const reach = last[S.charCodeAt(i) - 97];
            if (reach > end) end = reach; // this letter drags the part out to its last appearance

            if (i === end) {
                // every letter seen in this part has its final appearance inside it, so the part can close
                sizes.push(end - start + 1);
                start = i + 1;
            }
        }

        return sizes;
    }
}