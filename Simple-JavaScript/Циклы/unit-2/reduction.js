//Сократите код.

let elemResult = document.getElementById("result");
let i = 100;

// elemResult.innerHTML += "Число: <b>100</b><br>";
// elemResult.innerHTML += "Число: <b>80</b><br>";
// elemResult.innerHTML += "Число: <b>60</b><br>";
// elemResult.innerHTML += "Число: <b>50</b><br>";
// elemResult.innerHTML += "Число: <b>40</b><br>";
// elemResult.innerHTML += "Число: <b>20</b><br>";
// elemResult.innerHTML += "Число: <b>10</b><br>";
// elemResult.innerHTML += "Число: <b>0</b><br>";

while (i >= 0) {
  elemResult.innerHTML += "Число: <b>" + i + "</b><br>";
  i -= 20;
}
