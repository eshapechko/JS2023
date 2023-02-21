// 2. Повторите поведение страницы по данному образцу. При нажатии на область, красный квадрат его верхний левый угол доложен поместиться в ту координату, на которую вы нажали
let square = document.querySelector(".square");
let body = document.querySelector("body");

function coordinates(event) {
    square.style.left = event.clientX + "px";
    square.style.top = event.clientY + "px";
}

body.addEventListener("click", coordinates);
