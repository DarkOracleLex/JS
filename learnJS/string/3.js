/* Создайте функцию truncate(str, maxLength), 
которая проверяет длину строки str и, если она превосходит maxLength, 
заменяет конец str на "…", так, чтобы её длина стала равна maxLength.

Результатом функции должна быть та же строка, 
если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!" */

function truncate(str, maxLength) {
  return str.length > maxLength
    ? str.slice(0, maxLength - 1) + "…"
    : str;
}

console.log(
  truncate(
    "Вот, что мне хотелось бы сказать на эту тему:",
    20
  )
);
