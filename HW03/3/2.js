"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

function toNeto(salary) {
  alert(`Your salary after excluding taxes is: ${(salary * 0.87).toFixed(2)}`);
}

// const salary = Number(prompt("Enter your bruto salary:"));
// if (Number.isFinite(salary) && salary > 0) {
//   // Number.isFinite(num) = Neither Nan nor infinity
//   toNeto(salary);
// } else {
//   alert("Wrong Number!");
// }
