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
