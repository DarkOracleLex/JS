/* Сортировать в порядке по убыванию */

let arr = [5, 2, 1, -10, 8];

function sortByDescending(array) {
  return array.sort((a, b) => {
    return b - a;
  });
}

sortByDescending(arr);

console.log(arr); // 8, 5, 2, 1, -10
