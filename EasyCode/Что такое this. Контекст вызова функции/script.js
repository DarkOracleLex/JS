"use strict";

// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

let rectangleCalculations = {
  width: 100,
  height: 200,
  getArea() {
    return this.width * this.height;
  },
};

console.log(rectangleCalculations.getArea());

// 2.Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

let item = {
  price: 10,
  discount: "15%",
  getPrice() {
    return this.price;
  },
  getPriceWithDiscount() {
    return (
      this.price -
      (this.price * parseInt(this.discount)) / 100
    );
  },
};

console.log(item.getPrice(), item.getPriceWithDiscount());

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

let obj = {
  height: 10,
  increment() {
    return this.height + 1;
  },
};

console.log(obj.increment());

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

let numerator = {
  value: 1,
  double() {
    this.value ** 2;
    return this;
  },
  plusOne() {
    this.value++;
    return this;
  },
  minusOne() {
    this.value--;
    return this;
  },
};

numerator.plusOne();
console.log(numerator.value);

// 5. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const item1 = {
  amount: 20,
  price: 1000,
  totalPrice() {
    return this.amount * this.price;
  },
};

console.log(item1.totalPrice());

// 6.Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const item1 = {
  amount: 20,
  price: 1000,
  totalPrice() {
    return this.amount * this.price;
  },
};

const item2 = {
  amount: 30,
  price: 4000,
};

console.log(item1.totalPrice.bind(item2)());

// 7. Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

let sizes = { width: 5, height: 10 };
getSquare = function () {
  return this.width * this.height;
};

// console.log(getSquare.bind(sizes)());
//console.log(getSquare.call(sizes));

// 8.let element = {
//   height: 25,
//   getHeight: function () {return this.height;}
// };

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); // undefined
