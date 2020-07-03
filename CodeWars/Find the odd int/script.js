// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  return A.map(function (currentValue, index, array) {
    let repeatNum = 0;
    for (let i = 0; i < array.length; i++) {
      if (currentValue === array[i]) {
        repeatNum += 1;
      }
    }
    if (repeatNum % 2 === 1 || repeatNum === 1) {
      return array[index];
    }
  }).filter(function (x) {
    return x !== undefined && x !== null;
  })[0];
}

// Решение с CodeWars:

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
