//Модуль 6 Задание 4
function numSeries(a, b) {
  let timerId = setInterval(function() {
    console.log(a);
    if (a === b) {
      clearInterval(timerId);
    }
    a++;
  }, 1000);
}

numSeries (5, 15);
