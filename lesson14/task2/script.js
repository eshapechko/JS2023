const body = document.querySelector("body");
const button = document.querySelector(".btn");
const activeTheme = localStorage.getItem("theme");

if (activeTheme) {
    body.classList.add("dark");
}

function getTheme() {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme");
    }
}

button.addEventListener("click", getTheme);
