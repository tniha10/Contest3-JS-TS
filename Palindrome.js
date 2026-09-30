{/**A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. For this problem, you need to write a function that checks if a given string is a palindrome.
Your function should ignore case, spaces, and punctuation. Only alphanumeric characters (letters and numbers) should be considered when determining if the string is a palindrome.

Examples
isPalindrome("madam")
// => true

isPalindrome("A man, a plan, a canal: Panama")
// => true

isPalindrome("hello")
// => false

Example 1
Input: str = "madam"
Output: true

Example 2
Input: str = "A man, a plan, a canal: Panama"
Output: true

Constraints
The input `str` will be a string.
The length of `str` will be between 0 and 1000 characters. */}

function isPalindrome(str) {
  
  let clearedResult = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let reversedResult = clearedResult.split('').reverse().join('');

  return clearedResult === reversedResult;
}