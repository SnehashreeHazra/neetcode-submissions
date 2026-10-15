class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const graph = new Map();

        for (const [from, to] of tickets) {
            if (!graph.has(from)) {
                graph.set(from, []);
            }
            graph.get(from).push(to);
        }

        // Sort destinations in reverse lexical order
        for (const destinations of graph.values()) {
            destinations.sort().reverse();
        }

        const itinerary = [];

        const dfs = (airport) => {
            const destinations = graph.get(airport);

            while (destinations && destinations.length > 0) {
                const next = destinations.pop();
                dfs(next);
            }

            itinerary.push(airport);
        };

        dfs("JFK");

        return itinerary.reverse();
    }
}