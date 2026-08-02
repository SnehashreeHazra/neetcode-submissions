class Solution {
    canFinish(numCourses, prerequisites) {
        // Build adjacency list
        const adj = Array.from({ length: numCourses }, () => []);
        for (const [a, b] of prerequisites) {
            adj[b].push(a); // b must be taken before a
        }

        // 0 = unvisited, 1 = visiting (in current path), 2 = done (safe)
        const state = new Array(numCourses).fill(0);

        const dfs = (node) => {
            if (state[node] === 1) return false; // cycle detected!
            if (state[node] === 2) return true;  // already verified safe

            state[node] = 1; // mark as visiting

            for (const neighbor of adj[node]) {
                if (!dfs(neighbor)) return false;
            }

            state[node] = 2; // mark as done
            return true;
        };

        // Check every course (graph may be disjointed)
        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
