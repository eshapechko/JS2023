// ЗАДАНИЕ 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

class person {
    constructor(name) {
        this.name = name;
    }
    sayHi = () => console.log(`Hello ${name}`);
}

// ЗАДАНИЕ 2
// Создайте функцию-конструктор Calculator, которая при вызове запрашивает два числа при помощи prompt и сохраняет их значение в свойствах объекта, а также возвращает объект с двумя методами:
// sum() возвращает сумму введённых чисел.
// mul() возвращает произведение введённых чисел.

class Calculator {
    constructor() {
        this.number = function () {
            this.a = +prompt("Введите число №1");
            this.b = +prompt("Введите число №2");
        };

        this.sum = function () {
            return this.a + this.b;
        };

        this.mul = function () {
            return this.a * this.b;
        };
    }
}

let calculator = new Calculator();
calculator.number();

console.log("Сумма", calculator.sum());
console.log("Произведение чисел", calculator.mul());
