// 4. Создайте инпут который будет выводить код последнего элемента введенного в инпут
let input = document.querySelector("input");

input.addEventListener("keyup", myLetterCode);

function myLetterCode() {
    let string = input.value.slice(-1);
    let code = string.charCodeAt();
    document.querySelector(".text").innerHTML = `Код нажатой клавиши: ${code}`;
}
