/* Напишите функцию shuffle(array), 
которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. 
Например: */

let arr = [1, 2, 3];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function shuffle(arr) {
  return arr.sort(() => {
    return getRandomArbitrary(-1, 1);
  });
}

shuffle(arr);
console.log(arr);
// arr = [3, 2, 1]

shuffle(arr);
console.log(arr);
// arr = [2, 1, 3]

shuffle(arr);
console.log(arr);
// arr = [3, 1, 2]
// ...

// Все последовательности элементов должны иметь одинаковую вероятность.
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2],
// или [3,1,2] и т.д., с равной вероятностью каждого случая.
