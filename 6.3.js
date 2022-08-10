//Модуль 6 Задание 3
function firstNum() {
  let a = 7;
  return function() {
    let b = 5;
    console.log(a + b);
  } 
}
let result = firstNum();
result();

