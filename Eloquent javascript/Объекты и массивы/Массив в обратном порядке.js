/* Напишите две функции, reverseArray и reverseArrayInPlace. 
Первая получает массив как аргумент и выдаёт новый массив, 
с обратным порядком элементов. 
Вторая работает как оригинальный метод reverse – 
она меняет порядок элементов на обратный в том массиве, 
который был ей передан в качестве аргумента. 
Не используйте стандартный метод reverse. */

function reverseArray(arr) {
  let resultArr = [];
  arr.forEach((curVal, i, arr) => {
    resultArr.push(arr[arr.length - 1 - i]);
  });
  return resultArr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return arr;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
