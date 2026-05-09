class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    const stack = []; // [index, height]
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        let start = i;

        // pop bars taller than current → they can't extend further right
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            const [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index));
            start = index; // current bar can extend back to this index
        }

        stack.push([start, heights[i]]);
    }

    // process remaining bars in stack (extend to end)
    for (const [index, height] of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }

    return maxArea;
    }
}
