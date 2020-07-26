/* Напишите функцию range, принимающую два аргумента, 
начало и конец диапазона, и возвращающую массив, 
который содержит все числа из него, включая начальное и конечное. */

function range(start, end) {
  let arr = [];
  while (start <= end) {
    arr.push(start);
    start++;
  }
  return arr;
}

/* Затем напишите функцию sum, 
принимающую массив чисел и возвращающую их сумму. 
Запустите указанную выше инструкцию и убедитесь, что она возвращает 55. */

function sum(arr) {
  return arr.reduce((acc, el) => (acc += el), 0);
}

console.log(sum(range(1, 10)));

/* В качестве бонуса дополните функцию range, 
чтобы она могла принимать необязательный 
третий аргумент – шаг для построения массива. 
Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) 
должен будет вернуть [1, 3, 5, 7, 9]. 
Убедитесь, что она работает с отрицательным шагом так, 
что вызов range(5, 2, -1) возвращает [5, 4, 3, 2]. */

function rangeWithStep(
  start,
  end,
  step = start < end ? 1 : -1
) {
  let arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(5, 2, -1));
