/* Напишите функцию checkSpam(str), возвращающую true, 
если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

function isPositive(str) {
  let checkValues = ["viagra", "xxx"];
  for (let i = 0; i < checkValues.length; i++) {
    if (str.toLowerCase().includes(checkValues[i])) {
      return true;
    }
  }
}

function checkSpam(str) {
  return str.split(" ").some(isPositive);
}

console.log(checkSpam("buy ViAgRA now"));
