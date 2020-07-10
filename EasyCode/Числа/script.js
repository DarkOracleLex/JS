"use strict";

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

function getRoundPi() {
  return Math.PI.toFixed(2);
}

console.log(getRoundPi());

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

function getMaxAndMin(arr) {
  return (
    Math.min.apply(null, arr) +
    " " +
    Math.max.apply(null, arr)
  );
}

console.log(getMaxAndMin([15, 11, 16, 12, 51, 12, 13, 51]));

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой

function getRoundRandom() {
  return Math.random().toFixed(2);
}

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(3, 5));

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

console.log((0.6 + 0.7).toFixed(1));
console.log((0.6 * 10 + 0.7 * 10) / 10);

// 5. Получить число из строки ‘100$’

function getNumber(str) {
  return +str.replace(/\D+/g, "");
}

console.log(getNumber("100$"));
