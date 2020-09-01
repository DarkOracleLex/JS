"use strict";

/* Create a simple calculator that given a string of operators (), +, -, *, / 
and numbers separated by spaces returns the value of that expression.

Example:

Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
Remember about the order of operations! 
Multiplications and divisions have a higher priority and should be performed left-to-right. 
Additions and subtractions have a lower priority and should also be performed left-to-right. */

const Calculator = function () {
  function evaluate(string) {
    // делим строку по пробелам
    let operations = string.split(" ");
    let result = 0;

    //считаем  * и /
    for (let i = 0; i < operations.length; i++) {
      if (operations[i] === "*") {
        result = +operations[i - 1] * +operations[i + 1];
        operations.splice(i - 1, 3, result);
        i = 0;
      } else if (operations[i] === "/") {
        if (operations[i + 1] === "0") {
          return "Нельзя делить на нуль";
        }
        result = +operations[i - 1] / +operations[i + 1];
        operations.splice(i - 1, 3, result);
        i = 0;
      }
    }
    // считаем + и -
    for (let i = 0; i < operations.length; i++) {
      if (operations[i] === "+") {
        result = +operations[i - 1] + +operations[i + 1];
        operations.splice(i - 1, 3, result);
        i = 0;
      } else if (operations[i] === "-") {
        result = +operations[i - 1] - +operations[i + 1];
        operations.splice(i - 1, 3, result);
        i = 0;
      }
    }

    return operations.join("");
  }
  return { evaluate };
};

console.log(Calculator().evaluate("2 / 2 + 3 * 4 - 6"));
console.log(Calculator().evaluate("3 - 4"));

/* Решение с CodeWars:

const Calculator = function() {
  this.operation = (a, b, operator) => {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
    }
  }

  this.evaluate = (str) => {
    const args = str.split(' ');
    ['/', '*', '-', '+'].forEach((op) => {
      while ((i = args.indexOf(op)) !== -1) {
        args[i - 1] = this.operation(+args[i - 1], +args[i + 1], op);
        args.splice(i, 2);
      }
    })
    return +args[0];
  }
}; */
