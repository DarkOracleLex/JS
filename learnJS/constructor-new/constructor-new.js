/* Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и 
сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например: */

function Calculator() {
  this.read = function () {
    this.first = +prompt("Первое значение?", 0);
    this.second = +prompt("Второе значение?", 0);
  };
  this.sum = function () {
    return this.first + this.second;
  };
  this.mul = function () {
    return this.first * this.second;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

/* Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается 
в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, 
что ввёл пользователь при вызовах метода read(), 
с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:*/

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Сколько нужно добавить?", 0);
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
