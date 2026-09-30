{/**Given a temperature value and its unit ('C' for Celsius or 'F' for Fahrenheit), convert the temperature to the other unit. The result should be a number, rounded to two decimal places.

Examples
convertTemperature(0, 'C');
// Expected output: 32

convertTemperature(32, 'F');
// Expected output: 0

Example 1
Input: value = 0, unit = "C"
Output: 32

Example 2
Input: value = 32, unit = "F"
Output: 0

Constraints
`value` will be a number.
`unit` will be either 'C' or 'F'. */}

function convertTemperature(value, unit) {
  
  let result;
  if(unit === 'C'){
    result = (value * 9/5) + 32;
  }
  else{
    result = (value - 32) * 5/9;
  }
  return Math.round(result * 100) / 100;
}