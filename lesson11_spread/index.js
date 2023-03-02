// Задание 1

// Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов остаточного массива меньше 2, то вторая переменная должна стать равна "alex".

// let arrayNames = ["Nick", "Kate", "Jane", "Tom", "Jerry"];
// let [firstName, secondName, ...otherName] = arrayNames;

// if (otherName.length < 2) {
//     secondName = "alex";
//     console.log(secondName);
// } else {
//     for (elem of otherName) {
//         console.log(elem);
//     }
// }

// Задание 2

// Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива.

// let arrayNames1 = ["Nick", "Kate", "Jane", "Tom", "Jerry"];
// let [first, second, third] = arrayNames1;
// const name2 = (a, b, c) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// name2(first, second, third);

// const name1 = (arr) => {
//     let [first, second, third] = arr;
//     console.log("first: ", first);
//     console.log("second: ", second);
//     console.log("third: ", third);
// };
// name1(arrayNames1);

// Задание 3
// Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.
let user = {
    name: "Mickle",
    age: 30,
    color: "black",
};

let { name, weight } = user;
if (name === undefined || weight === undefined) {
    let { name = 1, weight = 2, ...fields } = user;
    console.log("weight: ", weight);
    console.log("name: ", name);
    console.log(fields);
}
console.log("weight: ", weight);
console.log("name: ", name);
