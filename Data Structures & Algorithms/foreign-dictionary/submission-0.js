class Solution {
    /**
     * @param {string[]} words
     * @return {string}
     */
    foreignDictionary(words) {
        const graph = new Map();
        const indegree = new Map();

        // Step 1: Initialize every unique character
        for (const word of words) {
            for (const char of word) {
                if (!graph.has(char)) {
                    graph.set(char, new Set());
                    indegree.set(char, 0);
                }
            }
        }

        // Step 2: Build the directed graph
        for (let i = 0; i < words.length - 1; i++) {
            const word1 = words[i];
            const word2 = words[i + 1];

            // Invalid case: longer word comes before its prefix
            if (
                word1.length > word2.length &&
                word1.startsWith(word2)
            ) {
                return "";
            }

            const minLength = Math.min(
                word1.length,
                word2.length
            );

            for (let j = 0; j < minLength; j++) {
                if (word1[j] !== word2[j]) {
                    const from = word1[j];
                    const to = word2[j];

                    // Avoid duplicate edges
                    if (!graph.get(from).has(to)) {
                        graph.get(from).add(to);
                        indegree.set(
                            to,
                            indegree.get(to) + 1
                        );
                    }

                    // Only the first differing character matters
                    break;
                }
            }
        }

        // Step 3: Add all zero-indegree characters to the queue
        const queue = [];

        for (const [char, degree] of indegree) {
            if (degree === 0) {
                queue.push(char);
            }
        }

        // Step 4: Perform topological sorting
        let result = "";
        let front = 0;

        while (front < queue.length) {
            const char = queue[front++];
            result += char;

            for (const neighbor of graph.get(char)) {
                indegree.set(
                    neighbor,
                    indegree.get(neighbor) - 1
                );

                if (indegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Step 5: Detect cycles
        if (result.length !== indegree.size) {
            return "";
        }

        return result;
    }
}