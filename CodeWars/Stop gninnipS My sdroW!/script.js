/* Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
 */
let spaceChar = " ";

function spinWords(str) {
  let iteratorArr = str.split(" ");
  let finishedString = "";
  let arrLength = null;

  for (let i = 0; i < iteratorArr.length; i++) {
    if (iteratorArr[i].length >= 5) {
      let spinningWord = iteratorArr[i]
        .split("")
        .reverse()
        .join("");

      if (i === iteratorArr.length - 1) {
        finishedString += spinningWord;
      } else {
        finishedString += spinningWord + spaceChar;
      }
    } else {
      if (i === iteratorArr.length - 1) {
        finishedString += iteratorArr[i];
      } else {
        finishedString += iteratorArr[i] + spaceChar;
      }
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
