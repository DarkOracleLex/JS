/* Create a function taking a positive integer as its parameter and returning a string containing 
the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with 
the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 
1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.

Example: solution(1000); // should return 'M'

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row. */

function solution(number) {
  let romanNumber = "";
  let M = 1000,
    CM = 900,
    D = 500,
    CD = 400,
    C = 100,
    XC = 90,
    L = 50,
    XL = 40,
    X = 10,
    IX = 9,
    V = 5,
    IV = 4,
    I = 1;

  for (i = 0; i < 7; i++) {
    if (number >= M) {
      romanNumber += "M".repeat(Math.floor(number / M));
      number -= M * Math.floor(number / M);
      continue;
    } else if (number >= CM) {
      romanNumber += "CM".repeat(Math.floor(number / CM));
      number -= CM * Math.floor(number / CM);
      continue;
    } else if (number >= D) {
      romanNumber += "D".repeat(Math.floor(number / D));
      number -= D * Math.floor(number / D);
      continue;
    } else if (number >= CD) {
      romanNumber += "CD".repeat(Math.floor(number / CD));
      number -= CD * Math.floor(number / CD);
      continue;
    } else if (number >= C) {
      romanNumber += "C".repeat(Math.floor(number / C));
      number -= C * Math.floor(number / C);
      continue;
    } else if (number >= XC) {
      romanNumber += "XC".repeat(Math.floor(number / XC));
      number -= XC * Math.floor(number / XC);
      continue;
    } else if (number >= L) {
      romanNumber += "L".repeat(Math.floor(number / L));
      number -= L * Math.floor(number / L);
      continue;
    } else if (number >= XL) {
      romanNumber += "XL".repeat(Math.floor(number / XL));
      number -= XL * Math.floor(number / XL);
      continue;
    } else if (number >= X) {
      romanNumber += "X".repeat(Math.floor(number / X));
      number -= X * Math.floor(number / X);
      continue;
    } else if (number >= IX) {
      romanNumber += "IX".repeat(Math.floor(number / IX));
      number -= IX * Math.floor(number / IX);
      continue;
    } else if (number >= V) {
      romanNumber += "V".repeat(Math.floor(number / V));
      number -= V * Math.floor(number / V);
      continue;
    } else if (number >= IV) {
      romanNumber += "IV".repeat(Math.floor(number / IV));
      number -= IV * Math.floor(number / IV);
      continue;
    } else if (number >= I) {
      romanNumber += "I".repeat(Math.floor(number / I));
      number -= I * Math.floor(number / I);
      continue;
    }
  }
  return romanNumber;
}

console.log(solution(2576)); // MMDLXXVI

//  Правильное решение

/* function solution(number) {
  // convert the number to a roman numeral
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var ans = "";
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
} */
