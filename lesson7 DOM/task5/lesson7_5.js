// 4. Создайте инпут который будет выводить код последнего элемента введенного в инпут
let input = document.querySelector("input");

input.addEventListener("keyup", myLetter);

function myLetter() {
    let string = input.value.slice(-1);

    let text = (document.querySelector(".text").innerHTML = `Нажатая клавиша: ${string}`);
}
