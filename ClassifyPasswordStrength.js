{/**Given a password string, classify its strength as "Weak", "Medium", or "Strong" based on the following rules:

Strong: The password has a length of 8 or more characters and contains at least one uppercase letter, one lowercase letter, one digit, and one special character (from !@#$%^&*).
Medium: The password has a length of 6 or more characters and satisfies at least two of the four character-type conditions (uppercase, lowercase, digit, special character).
Weak: Any password that does not meet the criteria for "Strong" or "Medium".

Examples
classifyPassword("Password1!")
// Expected: "Strong"

classifyPassword("pass123")
// Expected: "Medium"

Example 1
Input: password = "Password1!"
Output: "Strong"

Example 2
Input: password = "pass123"
Output: "Medium" */}

function classifyPassword(password) {
 
  let hasUpper = /[A-Z]/.test(password);
  let hasLower = /[a-z]/.test(password);
  let hasDigit = /[0-9]/.test(password);
  let hasSpecial = /[!@#$%^&*]/.test(password);
  
  let count = 0;

  if(hasUpper){
    count++;
  }
  if(hasLower){
    count++;
  }
  if(hasDigit){
    count++;
  }
  if(hasSpecial) {
    count++;
  }
  let passwordLength = password.length;
  if (passwordLength >= 8 && hasUpper && hasLower && hasDigit && hasSpecial) {
    return "Strong";
  }

  if (passwordLength >= 6 && count >= 2) {
    return "Medium";
  }

  return "Weak";
 }
