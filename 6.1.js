// Модуль 6 Задание 1
let arr = [3, 0, 1, null, 5, 1, 13, 0.5, 34];
function OddAndEvenCount(arr) {
    let zero = 0;
    let number = 0;
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" ||!isNaN(arr[i])) {
            number += 1;
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }
    
    console.log(`${even} числа чётных, ${odd} нечётных, ${zero} ноль`);
}
   OddAndEvenCount(arr)