class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // row[j] = number of ways to reach column j in the current row
        const row = new Array(n).fill(1); // the first row has exactly one way to reach each cell

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                // ways from above (row[j], still the previous row's value) + ways from the left (row[j-1])
                row[j] += row[j - 1];
            }
        }

        return row[n - 1];
    }
}