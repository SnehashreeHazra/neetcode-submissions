class Solution {
    generateParenthesis(n) {
        const result = [];

        const backtrack = (current, open, close) => {
            if (current.length === 2 * n) {
                result.push(current);
                return;
            }

            // Add '(' if we still have open brackets left
            if (open < n) {
                backtrack(current + '(', open + 1, close);
            }

            // Add ')' only if close count is less than open count
            if (close < open) {
                backtrack(current + ')', open, close + 1);
            }
        };

        backtrack('', 0, 0);
        return result;
    }
}
