class Solution {
    findWords(board, words) {
        const root = {};
        for (const word of words) {
            let node = root;
            for (const ch of word) {
                if (!node[ch]) node[ch] = {};
                node = node[ch];
            }
            node["END"] = word;
        }

        const rows = board.length;
        const cols = board[0].length;
        const result = [];

        const dfs = (r, c, node) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols) return;
            const ch = board[r][c];
            if (ch === "#" || !node[ch]) return;

            const next = node[ch];
            if (next["END"]) {
                result.push(next["END"]);
                delete next["END"];
            }

            board[r][c] = "#";
            dfs(r + 1, c, next);
            dfs(r - 1, c, next);
            dfs(r, c + 1, next);
            dfs(r, c - 1, next);
            board[r][c] = ch;
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, root);
            }
        }

        return result;
    }
}
