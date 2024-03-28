"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
amount = 20; //Identifier 'amount' has already been declared (at 4.js:1:1) :(
let xsis = "X";
for (let i = 0; i < amount; i++) {
  console.log(xsis);
  xsis += "X";
}
