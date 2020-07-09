"use strict";

// let string = ‘some test string’;
// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

// 1. Получить первую и последнюю буквы строки

function getFirstAndLastChar(str) {
  return `${str[0]} ${str[str.length - 1]}`;
}

console.log(getFirstAndLastChar("some test string"));

// 2. Сделать первую и последнюю буквы в верхнем регистре

function capitalizeFirstAndLastChar(str) {
  return `${str[0].toUpperCase()}${str.slice(
    1,
    str.length - 1
  )}${str[str.length - 1].toUpperCase()}`;
}

console.log(capitalizeFirstAndLastChar("some test string"));

// 3. Найти положение слова ‘string’ в строке

function getWordPosition(str, word) {
  return (
    str.split(" ").findIndex(function (item) {
      if (item === word) {
        return true;
      }
    }) + 1
  );
}

console.log(getWordPosition("some test string", "string"));

function getWordPosition(str, word) {
  return str.indexOf(word);
}

console.log(getWordPosition("some test string", "string"));

// 4. Найти положение второго пробела (“вручную” ничего не считать)

function getCharPosition(str, char, nth) {
  let charIndexes = [];
  let i = 0;
  let j = 0;

  do {
    charIndexes[i] = str.indexOf(char, j) + 1;
    j = charIndexes[i];
    i++;
  } while (i < nth);

  return charIndexes[nth - 1];
}

console.log(getCharPosition("some test string", " ", 2));

// 5. Получить строку с 5-го символа длиной 4 буквы

function getStringFromPosition(str, position, width) {
  return str.slice(position, position + width);
}

console.log(
  getStringFromPosition("some test string", 5, 4)
);

// 6. Получить строку с 5-го по 9-й символы

function getStringFromPosition(
  str,
  startPosition,
  EndPosition
) {
  return str.slice(startPosition, EndPosition);
}

console.log(
  getStringFromPosition("some test string", 5, 9)
);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)

function getStringWithoutChars(str, width) {
  let substring = str.substr(-width, width);
  console.log(substring);
  return str.replace(substring, "");
}

console.log(getStringWithoutChars("some test string", 6));

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”

function printYear(a, b) {
  return "" + a + ("" + b);
}

console.log(getYear(20, 16));
