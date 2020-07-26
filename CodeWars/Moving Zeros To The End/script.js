/* Write an algorithm that takes an array 
and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

var moveZeros = function (arr) {
  let resultArr = [];
  let zeros = [];
  arr.forEach((el, i, arr) => {
    if (el === 0) {
      zeros.push(0);
    } else {
      resultArr.push(el);
    }
  });
  return resultArr.concat(zeros);
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

console.log(
  moveZeros([false, 1, 0, 0, 1, 2, 0, 1, 3, "a"])
);

/* Решение с CodeWars:

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
} */
