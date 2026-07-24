class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
    const result = [];
    const cols = new Set();
    const posDiag = new Set(); // (row + col)
    const negDiag = new Set(); // (row - col)
    
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    
    const backtrack = (row) => {
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue; // queen attacks here, skip
            }
            
            // Place queen
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);
            board[row][col] = 'Q';
            
            backtrack(row + 1);
            
            // Remove queen (backtrack)
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
            board[row][col] = '.';
        }
    };
    
    backtrack(0);
    return result;
}
}
