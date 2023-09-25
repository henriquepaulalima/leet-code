/*

Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10

*/

function minimumTotal(triangle: number[][]): number {
  let triangleLenght = triangle.length;
  let dp = new Array(triangleLenght + 1).fill(-1).map(() => Array(triangleLenght + 1).fill(-1));
  return tri(triangleLenght, triangle, dp, 0, 0);
};

function tri(triangleLength: number, tree: number[][], dp: number[][], i: number, j: number) {
  if (i === triangleLength) return 0;
  if (dp[i][j] !== -1) return dp[i][j];
  return dp[i][j] = Math.min(tree[i][j] + tri(triangleLength, tree, dp, i + 1, j), tree
  [i][j] + tri(triangleLength, tree, dp, i + 1, j + 1));
}
