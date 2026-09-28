class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const result = [];
        if (matrix.length === 0) return result;

        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {
            // Traverse right along the top row
            for (let col = left; col <= right; col++) {
                result.push(matrix[top][col]);
            }
            top++;

            // Traverse down along the right column
            for (let row = top; row <= bottom; row++) {
                result.push(matrix[row][right]);
            }
            right--;

            // Traverse left along the bottom row (if still valid)
            if (top <= bottom) {
                for (let col = right; col >= left; col--) {
                    result.push(matrix[bottom][col]);
                }
                bottom--;
            }

            // Traverse up along the left column (if still valid)
            if (left <= right) {
                for (let row = bottom; row >= top; row--) {
                    result.push(matrix[row][left]);
                }
                left++;
            }
        }

        return result;
    }
}