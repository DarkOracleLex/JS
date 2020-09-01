"use strict";

/* Complete the solution so that it strips all 
text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas" */

function solution(input, markers) {
  return input
    .split("\n")
    .map((val) => {
      for (let i = 0; i < markers.length; i++) {
        val = val.split(`${markers[i]}`)[0];
      }
      return val[val.length - 1] === " "
        ? val.substring(0, val.length - 1)
        : val;
    })
    .join("\n");
}

let result = solution(
  "apples, pears # and bananas\ngrapes\nbananas !apples",
  ["#", "!"]
);
console.log(result);

// Решение с CodeWars:

function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}