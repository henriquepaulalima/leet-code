/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 1) return strs[0];

  const firstWordChars = strs[0].split('');
  const commonPrefix: string[] = [];
  let currWordChars: string[] = [];
  let breakFunc = false;

  for (let i = 0; i < firstWordChars.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      currWordChars = strs[j].split('');
      if (i != 0 && currWordChars[i - 1] != firstWordChars[i - 1]) breakFunc = true;
      if (currWordChars[i] != firstWordChars[i] || breakFunc) break;
      if (currWordChars[i] == firstWordChars[i] && j == strs.length - 1) commonPrefix.push(firstWordChars[i]);
    }
  }

  if (commonPrefix.length == 0) return "";
  return commonPrefix.join('');
};
