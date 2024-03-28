"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(`Sum Value is: ${sum}`);
}

function minValue(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log(`Min Vlaue is: ${min}`);
}

function indexOfThree(array) {
  const indexes = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
      indexes.push(i);
    }
  }
  return indexes;
}

const array = [];
for (let i = 0; i < 5; i++) {
  array.push(Math.trunc(Math.random() * 10));
}
console.log(array);

sum(array);
minValue(array);
console.log("Indices of three are: " + indexOfThree(array));
