/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

*/



// Solution 1

function canConstruct1(ransomNote: string, magazine: string): boolean {
  for (let i = 0; i < ransomNote.length; i++) {
    let ransomNoteIndex = ransomNote.charAt(i);
    let matchingIndex = magazine.indexOf(ransomNoteIndex);

    if (matchingIndex == -1) return false;

    magazine = magazine.substring(0, matchingIndex) + magazine.substring(matchingIndex + 1);
  }

  return true;
};


// Solution 2

function canConstruct2(ransomNote: string, magazine: string): boolean {
  const magazineLetters = new Map();

  for (let i = 0; i < magazine.length; i++) {
    let magazineIndex = magazine.charAt(i);
    let currentCountMagazine = magazineLetters.get(magazineIndex);

    if (currentCountMagazine == (null || undefined)) currentCountMagazine = 0;

    magazineLetters.set(magazineIndex, currentCountMagazine + 1);
  }

  for (let j = 0; j < ransomNote.length; j++) {
    let ransomNoteIndex = ransomNote.charAt(j);
    let currentCountNote = magazineLetters.get(ransomNoteIndex);

    if (currentCountNote == (null || undefined)) currentCountNote = 0;

    if (currentCountNote == 0) {
      return false;
    } else {
      magazineLetters.set(ransomNoteIndex, currentCountNote - 1);
    }
  }

  return true;
};
