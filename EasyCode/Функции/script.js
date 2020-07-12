"use strict";

// 1. Создать функцию multiply, которая будет принимать любое количество чисел
// и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

console.log(multiply(1, 2, 3, 4));

// 2. Создать функцию, которая принимает строку и
// возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("test"));

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
// где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”
// подсказка: для получения кода используйте специальный метод

function getCodeStringFromText(str) {
  return str
    .split("")
    .map(function (currentValue) {
      return currentValue.charCodeAt();
    })
    .join(" ");
}

console.log(getCodeStringFromText("hello"));

// 4. Создать функцию угадай число.
// Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
// Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали
// то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”.
// Числа в строке указаны как пример вы подставляете реальные числа.

function guessTheNumber(num) {
  if (num < 0 || num > 10) {
    return "Не правильное число";
  } else {
    function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    let randomNum = randomInteger(1, 10);
    console.log(randomNum);
    if (randomNum === num) {
      return "Вы угадали!";
    } else {
      return "Попробуйте ещё раз.";
    }
  }
}

console.log(guessTheNumber(11));

// 5. Создать функцию, которая принимает число n и возвращает массив,
// заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
// Данное задание выполните после того как познакомитесь с методами массивов.

function getArrFilledNumbers(num) {
  let arr = [];
  let i = 1;
  while (i <= num) {
    arr.push(i);
    i++;
  }
  return arr;
}

console.log(getArrFilledNumbers(12));

// 6. Создать функцию, которая принимает массив,
// а возвращает новый массив с дублированными элементами входного массива.
// Данное задание выполните после того как познакомитесь с методами массивов:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
  return arr.concat(arr);
}

console.log(doubleArray([1, 2, 3]));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов
// и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
// Данное задание выполните после того как познакомитесь с методами массивов:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
  let resultArr = [];
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].splice(0, 1);
    resultArr[i] = arguments[i];
  }

  return resultArr;
}

console.log(changeCollection([1, 2, 3], ["a", "b", "c"]));

// 8. Создать функцию которая принимает массив пользователей,
// поле на которое хочу проверить и значение на которое хочу проверять.
// Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответствующие указанным параметрам.
// Данное задание выполните после того как познакомитесь с методами массивов

// funcGetUsers(users, “gender”, “male”);
// [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

function getUsers(arr, key, checkValue) {
  let resultArr = [];
  arr.map(function (currentValue, index) {
    if (arr[index][key] === checkValue) {
      resultArr.push(arr[index]);
    }
  });
  return resultArr;
}

let arr = [
  { name: "Denis", age: "29", gender: "male" },
  { name: "Ivan", age: "20", gender: "male" },
  { name: "Olga", age: "13", gender: "female" },
];

console.log(getUsers(arr, "gender", "male"));
