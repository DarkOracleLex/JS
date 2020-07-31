/* Создайте калькулятор
важность: 5
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

let calculator = {
  first: 0,
  second: 0,
  read() {
    this.first = +prompt("Введите первое значение", 0);
    this.second = +prompt("Введите второе значение", 0);
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/* Цепь вызовов
важность: 2
Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно сделать несколько последовательных вызовов, 
мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Измените код методов up, down и showStep таким образом, 
чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1
Такой подход широко используется в библиотеках JavaScript. */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().up().down().showStep();
