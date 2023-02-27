const images = document.querySelectorAll(".img");
const container = document.querySelector(".container");

const openBackground = () => {
    if (localStorage.getItem("background")) {
        container.style.background = localStorage.background;

        images.forEach((item) => {
            item.addEventListener("click", () => {
                container.style.background = `no-repeat center/cover url(${item.src})`;
                localStorage.setItem("background", container.style.background);
            });
        });
    } else {
        images.forEach((item) => {
            item.addEventListener("click", () => {
                container.style.background = `no-repeat center/cover url(${item.src})`;
                localStorage.setItem("background", container.style.background);
            });
        });
    }
};
openBackground();
