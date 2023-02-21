//9. Создайте раскрывающееся меню
let divMenu = document.querySelector(".menu");
let titleElem = document.querySelector(".title");

titleElem.onclick = function () {
    divMenu.classList.toggle("open");
};
