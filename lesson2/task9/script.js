// Задание 9

// Написать функцию, которая принимает целое число n.
// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.
// Пример, при запуске функции с параметром 3:

// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

// task solution
function getNum(n) {
    for (let i = 1; i < n; i = i + 0.5) {
        if (i / 1 === 0) {
            console.log(i + " integer");
        } else {
            console.log(i + " decimal");
        }
    }
}
getNum(5);
