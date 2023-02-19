const popupButton = document.querySelector(".popup-btn");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

popupButton.addEventListener("click", () => {
    popup.classList.add("active");
});

popup.addEventListener("click", (e) => {
    if (e.target === popup || e.target === popupClose) {
        popup.classList.remove("active");
    }
});
