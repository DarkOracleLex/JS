/* Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses! */

function createPhoneNumber(arr) {
  let returnNumber = "";
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i !== 2 && i !== 6) {
      returnNumber += arr[i];
    } else if (i === 0) {
      returnNumber += "(" + arr[i];
    } else if (i === 2) {
      returnNumber += arr[i] + ") ";
    } else if (i === 6) {
      returnNumber += "-" + arr[i];
    }
  }
  return returnNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/* Решение с CodeWars
function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return (
    "(" +
    numbers.substring(0, 3) +
    ") " +
    numbers.substring(3, 6) +
    "-" +
    numbers.substring(6)
  );
} */
