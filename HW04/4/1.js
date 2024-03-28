"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
let amount = 10;
for (let i = 0; i <= amount; i++) {
  if (i === 0) {
    console.log(`${i} - is zero`);
  } else if (i % 2 === 0) {
    console.log(`${i} - is even`);
  } else if (i % 2 !== 0) {
    console.log(`${i} - is odd`);
  } else {
    console.error("--- ERROR ---");
  }
}
