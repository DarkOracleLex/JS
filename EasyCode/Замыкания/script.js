/* 1.Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию. */

function subtractInt(minuend) {
  return (subtrahend) => {
    return minuend - subtrahend;
  };
}

let minus = subtractInt;

console.log(minus(10)(6));
console.log(minus(5)(6));

// 2.Реализовать функцию, которая умножает и
// умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker(num1) {
  return (num2) => (num1 *= num2);
}

const multiply = multiplyMaker(2);
console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)

/* 3. Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5 */

const strModule = (function () {
  let str = "";
  function setStr(value = "") {
    str = value + "";
  }
  function getStr() {
    return str;
  }
  function getStrLength() {
    return str.length;
  }
  function getInvertedStr() {
    return str.split("").reverse().join("");
  }

  return { setStr, getStr, getStrLength, getInvertedStr };
})();

strModule.setStr(123);
console.log(strModule.getStr());
console.log(strModule.getStrLength());
console.log(strModule.getInvertedStr());

/* 4. Создайте модуль “калькулятор”, который умеет складывать, 
умножать, вычитать, делить и возводить в степень. 
Конечное значение округлить до двух знаков после точки 
(значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100 */

// let calculator = (function () {
//   let value = 0;

//   function setValue(val) {
//     value = val;
//     return this;
//   }
//   function sum(val) {
//     value += val;
//     return this;
//   }
//   function multiply(val) {
//     value *= val;
//     return this;
//   }
//   function logValue() {
//     console.log(value);
//     return this;
//   }

//   return { setValue, sum, multiply, logValue };
// })();

// calculator.setValue(10);
// calculator.sum(3);
// calculator.multiply(2);
// calculator.logValue();

// calculator.setValue(10).sum(3).multiply(2).logValue();

let calculator = {
  value: 0,

  setValue(val) {
    this.value = val;
    return this;
  },
  sum(val) {
    this.value += val;
    return this;
  },
  multiply(val) {
    this.value *= val;
    return this;
  },
  logValue() {
    console.log(this.value);
    return this;
  },
};

calculator.setValue(10).sum(3).multiply(2).logValue();
