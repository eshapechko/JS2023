// 1. Повторите поведение страницы по данному образцу. Координаты должны меняться и зависеть от положения курсора мыши на в области
const move = document.querySelector("body");

move.addEventListener("mousemove", (event) => {
    move.innerText = `X:${event.screenX}, Y:${event.screenY}`;
});
