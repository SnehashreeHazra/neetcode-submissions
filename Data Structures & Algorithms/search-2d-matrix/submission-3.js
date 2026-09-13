class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0, right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // convert 1D index to 2D
        const row = Math.floor(mid / n);
        const col = mid % n;
        const val = matrix[row][col];

        if (val === target) return true;
        else if (val < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
    }
}
