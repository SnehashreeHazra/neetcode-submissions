class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            if (stack.pop() !== map[c]) return false;
        }
    }

    return stack.length === 0;
    }
}
