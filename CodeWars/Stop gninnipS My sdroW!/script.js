/* Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
 */

function spinWords(str) {
  let iteratorArr = str.split(" "); // создаёт массив из строки, каждый элемент - отдельное слово
  let finishedString = ""; // финальное состояние, которое выводит функция
  let arrLength = iteratorArr.length; // вычисляет сколько элементов в массиве
  let spaceChar = " ";

  for (let i = 0; i < arrLength; i++) {
    // цикл, кол-во итераций равно длине массива
    if (iteratorArr[i].length >= 5) {
      // если длина слова больше 5-ти - переворачиваем его
      let spinningWord = iteratorArr[i]
        .split("")
        .reverse()
        .join(""); // создаёт массив из слова, каждый элемент - отдельная буква, затем переворачивает и создаёт слово из массива

      i === arrLength - 1
        ? (finishedString += spinningWord)
        : (finishedString += spinningWord + spaceChar);
      //проверяет последнее ли слово в массиве и нажен ли пробел + записывает всё в финальную строку
    } else {
      // если длина слова меньше 5-ти - не переворачиваем его

      i === arrLength - 1
        ? (finishedString += iteratorArr[i])
        : (finishedString += iteratorArr[i] + spaceChar);
      // проверяет последнее ли слово в массиве и нажен ли пробел + записывает всё в финальную строку
    }
  }
  console.log(finishedString);
  return finishedString;
}

let spinningWords1 = "Hey fellow warriors";
let spinningWords2 = "This is a test";
let spinningWords3 = "This is another test";
let spinningWords4 = "You are almost to the last test";
let spinningWords5 = "Just kidding there is still one more";
let spinningWords6 = "Seriously this is the last one";

spinWords(spinningWords1);
spinWords(spinningWords2);
spinWords(spinningWords3);
spinWords(spinningWords4);
spinWords(spinningWords5);
spinWords(spinningWords6);
