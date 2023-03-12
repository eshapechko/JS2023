const tabs = document.getElementsByTagName("button");
const nav = document.querySelector(".tabs");
const tabContent = document.querySelectorAll(".tabcontent");

const openTab = () => {
    nav.addEventListener("click", (e) => {
        const tabBtn = e.target.closest(".btn");

        if (!tabBtn) return;

        [...tabs].forEach((item) => {
            if (item === tabBtn) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        tabContent.forEach((item) => {
            if (item.id === tabBtn.dataset.tab) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
};

openTab();
