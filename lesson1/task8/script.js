// Задание 8
// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел
let num1 = +prompt("Введите число 1");
let num2 = +prompt("Введите число 2");
if (num1 >= num2) {
    console.log("Большее число: " + num1);
} else {
    console.log("Большее число: " + num2);
}
