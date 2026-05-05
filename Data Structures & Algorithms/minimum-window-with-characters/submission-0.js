class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    if (!s || !t) return "";

    let map = new Map();

    // Build frequency map
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let left = 0, count = t.length;
    let minLen = Infinity, start = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (map.has(char)) {
            if (map.get(char) > 0) count--;
            map.set(char, map.get(char) - 1);
        }

        // Valid window
        while (count === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            let leftChar = s[left];

            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) count++;
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);

    }
}
