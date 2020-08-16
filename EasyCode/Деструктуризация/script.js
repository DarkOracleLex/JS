/* 1. Используя rest оператор и деструктуризацию, 
создать функцию, которая принимает любое количество аргументов и 
возвращает объект, содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) → 
{
  first: ‘a’,
  other: [‘b’, ‘c’, ‘d’] 
} */

function getFirstElAndOthers(first, ...others) {
  return { first: first, others: others };
}

console.log(getFirstElAndOthers("a", "b", "c", "d"));
console.log(getFirstElAndOthers("a", "b", "c", "d").first);

/* 2. Организовать функцию getInfo, которая принимает объект вида
{ name: ...,  info: { employees: [...], partners: [ … ]  } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) 
и первые две компании из массива partners:

const organization = {  
  name: 'Google',   
  info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};
getInfo(organization); → 
Name: Google 
Partners: Microsoft Facebook */

const organization = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

function getInfo({
  name = "Unknown",
  info: {
    partners: [first = "Unknown", second = "Unknown"] = [],
  } = {},
} = {}) {
  return `name: ${name}, partners: ${first}, ${second}`;
}

console.log(getInfo(organization));
console.log(getInfo());
