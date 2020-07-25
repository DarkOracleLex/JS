let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
let expenseItemPrise = prompt("Во сколько обойдется?");
let expenses = {
  expenseItem: expenseItemPrise,
};

let optionalExpenses = {};

let income = [];

const appData = {
  money,
  timeData: time,
  expenses,
  optionalExpenses,
  income,
  savings: false,
};

alert(`Бюджет пользователя за один день: ${money / 30}`);
