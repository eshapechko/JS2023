// 3. По аналогии со вторым заданием сделайте чтобы центр квадрата помещался в координату области

let square = document.querySelector(".square");
let body = document.querySelector("body");

function getCoordinates(event) {
    let squareCoordinat = body.getBoundingClientRect();

    let squareLeft = event.clientX - squareCoordinat.left - body.clientLeft - square.clientWidth / 2;
    let squareTop = event.clientY - squareCoordinat.top - body.clientTop - square.clientHeight / 2;

    square.style.left = squareLeft + "px";
    square.style.top = squareTop + "px";
}

body.addEventListener("click", getCoordinates);
