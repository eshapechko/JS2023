// Задание 8

// Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"

// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка:
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255.
// Одна функция может вызывать другую функцию

// task solution

const getRandomRGB = () => {
    let r = getRandomInteger(0, 255);
    let g = getRandomInteger(0, 255);
    let b = getRandomInteger(0, 255);
    return `rgb(${r},${g},${b})`;
};
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomRGB());
