class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        // Adjacency list
        const graph = Array.from({ length: numCourses }, () => []);

        // In-degree array
        const indegree = new Array(numCourses).fill(0);

        // Build graph
        for (const [course, prereq] of prerequisites) {
            graph[prereq].push(course);
            indegree[course]++;
        }

        // Queue for nodes with 0 in-degree
        const queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        const result = [];

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node);

            for (const neighbor of graph[node]) {
                indegree[neighbor]--;

                if (indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // If all courses are processed, return order
        return result.length === numCourses ? result : [];
    }
}
