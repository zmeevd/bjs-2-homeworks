"use strict"

//КВАДРАТНОЕ УРАВНЕНИЕ
function solveEquation(a, b, c) {
  let arr = [];
  let Discriminant = b * b - 4 * a * c;
  console.log ("D = " + Discriminant);

if (Discriminant < 0 || a == 0) {
  console.log ("Нет действующих корней");
  return (arr);

} else if (Discriminant == 0 && a !=0) {
  let x = - (b / (2 * a));
  console.log ("Один корень: " + "х" + " =" + x);
  arr.push(x);
  return (arr);

} else if (Discriminant > 0 && a !==0) {
  let x1 = (-b + Math.sqrt(Discriminant) )/(2*a);
  let x2 = (-b - Math.sqrt(Discriminant) )/(2*a);
  console.log ("Два корня: " + "х1" + " =" + x1 + "; " + "х2" + " =" + x2 + ";");
  arr.push(x1, x2);
  return (arr);

 } else {
  console.log ("Введите другие значения");
};
  return arr;
};

//ИПОТЕКА

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 // percent - процент
 // contribution - сумма первоначального взноса
 // amount - сумма кредита
 // countMonths -  длительност в месяцах

 percent = percent / 100; //перевод процента в доли
 let MonthPercent = percent / 12; //расчет процента в мемяц
 let BodyCredit = amount - contribution; //тело кредита
 let PayMonth = BodyCredit * (MonthPercent + (MonthPercent / (((1 + MonthPercent) ** countMonths) - 1))) // месячный платеж
 console.log ("Ежемесячный платеж: " + PayMonth);

 let total = PayMonth * countMonths; //Всего
 total = Math.round(total * 100) / 100; // Округление до 2 знаков после запятой

 console.log("Всего: " + total);
 return total;
};
