class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);

        if (!wordSet.has(endWord)) return 0;

        const queue = [[beginWord, 1]];

        while (queue.length > 0) {
            const [word, level] = queue.shift();

            if (word === endWord) {
                return level;
            }

            for (let i = 0; i < word.length; i++) {
                for (let ch = 97; ch <= 122; ch++) {
                    const newChar = String.fromCharCode(ch);

                    if (newChar === word[i]) continue;

                    const newWord =
                        word.slice(0, i) +
                        newChar +
                        word.slice(i + 1);

                    if (wordSet.has(newWord)) {
                        queue.push([newWord, level + 1]);
                        wordSet.delete(newWord); // mark visited
                    }
                }
            }
        }

        return 0;
    }
}