/* 1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
 */

//----------
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”

function glueArrToStr(arr, fn) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += fn(arr[i]);
  }
  return str;
}

function increaseFirstLetter(item) {
  if (!item) return item;

  return item[0].toUpperCase() + item.slice(1);
}

console.log(
  glueArrToStr(
    ["my", "name", "is", "Trinity"],
    increaseFirstLetter
  )
);

//----------
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”

function glueArrToStr(arr, fn) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${fn(arr[i])}, `;
  }
  return str;
}

function multiplyBy10(elem) {
  return elem * 10;
}

console.log(glueArrToStr([10, 20, 30], multiplyBy10));

//----------
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”

function glueNameAndAgeToStr(arr, fn) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += fn(arr[i]);
  }
  return str;
}

function getNameAndAge(elem) {
  return `${elem.name} is ${elem.age}, `;
}

console.log(
  glueNameAndAgeToStr(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" },
    ],
    getNameAndAge
  )
);

//----------
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” строки инвертируются

function glueArrToStr(arr, fn) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += fn(arr[i]);
  }
  return str;
}

function invertElem(elem) {
  return `${elem.split("").reverse().join("")}, `;
}

console.log(glueArrToStr(["abc", "123"], invertElem));

/* 2. Написать аналог метода every. Создайте функцию every,
она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив)
вторым аргументом callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5).
Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.
 */

function every(arr, fn) {
  if (
    Array.isArray(arr) !== true ||
    typeof fn !== "function"
  ) {
    console.error("error: invalid argument");
    return "error";
  }

  let result = true;
  for (let i = 0; i < arr.length; i++) {
    result = fn(arr[i]);
    if (result === false) {
      break;
    }
  }
  return result;
}

function check(item) {
  if (item > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(every([30, 10, 12], check));
