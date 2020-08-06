/* Напишите функцию camelize(str), 
которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, 
а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, 
чтобы разбить строку на массив символов, 
потом переделайте всё как нужно и методом join соедините обратно. */

function camelize(str) {
  let arr = str.split("");
  arr.forEach((item, i) => {
    if (item === "-") {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr.splice(i, 1);
    }
  });
  return arr.join("");
}

function camelize(str) {
  return str
    .split("")
    .map((item, i, arr) => {
      if (item === "-") {
        arr[i + 1] = arr[i + 1].toUpperCase();
        return "";
      }
      return arr[i];
    })
    .join("");
}

console.log(camelize("background-color"));
