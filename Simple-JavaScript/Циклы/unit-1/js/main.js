let total = 0;
for (let i = 0; i < 15; i++) {
  if (i === 8 || i === 13) {
    continue;
  }
  let first = Math.floor(Math.random() * 6 + 1);
  let second = Math.floor(Math.random() * 6 + 1);

  let diceRoll = "Первая кость: " + first + " Вторая кость: " + second + "<br>";
  document.getElementById("result").innerHTML += diceRoll;

  if (first === second) {
    document.getElementById("result").innerHTML +=
      "Выпал дубль. Число " + first + "<br>";
  }

  if ((first < 3 || second < 3) && (first > 4 || second > 4)) {
    document.getElementById("result").innerHTML +=
      "Большой разброс между костями, разница составляет: " +
      Math.abs(second - first) +
      "<br>";
  }

  total += first + second;
}

total > 100
  ? (document.getElementById("result").innerHTML +=
      "Победа, вы набрали очков: " + total)
  : (document.getElementById("result").innerHTML +=
      "Вы проиграли у вас очков: " + total);
