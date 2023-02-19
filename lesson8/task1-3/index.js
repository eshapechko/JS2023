// 1. Написать функцию makeCalculator, которая принимает число x и возвращает функцию, которая возвращает произведение x на 2.

function makeCalculator(x) {
    return function () {
        return x * 2;
    };
}

let calc1 = makeCalculator(4);
let calc2 = makeCalculator(10);

console.log(calc1());
console.log(calc2());

// 2. Написать функцию makeCounter, которая возвращает функцию, внутри которой увеличивается сохраненный каким-то образом ранее счетчик.

function makeCounter() {
    let count = 0;
    const res = function () {
        return count++;
    };
    return res;
}
let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

// 3. Написать функцию startsWith, которая принимает 2 строки и проверяет, начинается ли первая строка с символов второй строки. Функция возвращает true или false.

const startWith = (str1, str2) => str2.split("").includes(str1[0]);

console.log(startWith("fog", "day"));
console.log(startWith("dog", "day"));
console.log(startWith("apple", "day"));
console.log(startWith("car", "work"));
