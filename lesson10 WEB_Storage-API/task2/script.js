/*Задание 2

1)
Задать объект с полем name.
Задать переменную, которая будет хранить JSON упомянутого объекта.
Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

2)
Создать переменную user, в которой хранится объект.
Записать переменную в localStorage.
Создать переменную newUser, в которой будет храниться JS объект из localStorage.*/

// 1)
let obj = {
    name: "Alex",
};
let obgJson = JSON.stringify(obj);
console.log("obgJson: ", obgJson);
let parsing = JSON.parse(obgJson);
console.log("parsing: ", parsing);

// 2)
let user = {
    name: "Kate",
    age: 23,
};

let getObject = JSON.stringify(user);
localStorage.setItem("key", getObject);
let returnObject = JSON.parse(localStorage.getItem("key"));

console.log("returnObject: ", returnObject);
