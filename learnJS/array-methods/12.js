/* Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr.

Например: */

function unique(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
