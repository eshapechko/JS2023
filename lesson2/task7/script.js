// Задание 7
// Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы).

const getSquare = (min, max) => {
    for (let i = min; i <= max; i++) {
        console.log(i ** 2);
    }
};

getSquare(2, 10);
