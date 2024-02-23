/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

function isValid(s: string): boolean {
  let stack: string[] = [];

  for (let idx = 0; idx < s.length; idx++) {
    if (stack.length && stack[stack.length - 1] == '(' && s[idx] == ')')
      stack.pop();
    else if (stack.length && stack[stack.length - 1] == '{' && s[idx] == '}')
      stack.pop();
    else if (stack.length && stack[stack.length - 1] == '[' && s[idx] == ']')
      stack.pop();
    else
      stack.push(s[idx]);
  }

  return stack.length === 0;
};
