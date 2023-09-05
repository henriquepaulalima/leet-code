/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

 

Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200

*/

function minPathSum(grid: number[][]): number {
  const M = grid.length;
  const N = grid[0].length;
  const memo = new Array(M).fill(0).map(() => new Array(N));

  const dp = (x: number, y: number): number => {
    if (x === M - 1 && y === N - 1) {
      memo[x][y] = grid[x][y];
      return grid[x][y];
    }

    if (memo[x][y] !== undefined) return memo[x][y];

    if (x === M - 1) {
      memo[x][y] = grid[x][y] + dp(x, y + 1);
      return memo[x][y];
    }

    if (y === N - 1) {
      memo[x][y] = grid[x][y] + dp(x + 1, y);
      return memo[x][y];
    }

    memo[x][y] = grid[x][y] + Math.min(dp(x + 1, y), dp(x, y + 1));
    return memo[x][y];
  }

  return dp(0, 0);
};
