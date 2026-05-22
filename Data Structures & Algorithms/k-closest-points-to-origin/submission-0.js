class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        points.sort((a, b) => {
            let distA = a[0] * a[0] + a[1] * a[1];
            let distB = b[0] * b[0] + b[1] * b[1];

            return distA - distB;
        });

        return points.slice(0, k);
    }
}
