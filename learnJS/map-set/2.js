/* Анаграммы – это слова, у которых те же буквы в том же количестве, 
но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */

let arr = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];

function aclean(arr) {
  let keys = arr.map((val) => {
    return val.toLowerCase().split("").sort().join("");
  });
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(keys[i], arr[i]);
  }

  return Array.from(map.values());
}

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
