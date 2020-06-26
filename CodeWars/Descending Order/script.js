// Your task is to make a function that can take any non-negative integer
// as a argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  let arr = String(n).split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return +arr.join("");
}

console.log(descendingOrder(21445));

// Решение с CodeWars

// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }