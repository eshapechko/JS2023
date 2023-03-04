// Мобильное меню
const burgerMenu = document.querySelector(".header__mobile-menu");
const hiddenMenu = document.querySelector(".hidden-menu");
const hiddenMenuList = document.querySelector(".hidden-menu__list");
const mobileMenuClose = document.querySelector(".header__mobile-menu-close");
const hiddenMenuItem = document.querySelectorAll(".hidden-menu__item");

burgerMenu.addEventListener("click", () => {
    hiddenMenu.classList.add("active");
    hiddenMenuList.classList.add("active");
});

mobileMenuClose.addEventListener("click", () => {
    hiddenMenu.classList.remove("active");
    hiddenMenuList.classList.remove("active");
});

hiddenMenuItem.forEach((item) =>
    item.addEventListener("click", () => {
        hiddenMenu.classList.remove("active");
        hiddenMenuList.classList.remove("active");
    })
);

// Hero button click
const heroBtn = document.querySelector(".hero__btn");
const heroPopup = document.querySelector(".hero__popup");

heroBtn.addEventListener("click", () => {
    heroPopup.classList.add("active");
});

heroPopup.addEventListener("click", (e) => {
    if (e.target.closest(".btn__popup-close") || e.target.closest(".contacts__btn")) {
        heroPopup.classList.remove("active");
    }
});

// Portfolio navigation
const portfolioButtons = document.querySelectorAll(".portfolio__btn");
const portfolioList = document.querySelector(".portfolio__buttons");

const portfolioButtonController = () => {
    portfolioList.addEventListener("click", (e) => {
        const portfolioBtn = e.target.closest(".portfolio__btn");

        if (!portfolioBtn) return;

        portfolioButtons.forEach((item) => {
            if (item === portfolioBtn) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
};

portfolioButtonController();

// Portfolio

const portfolioImages = document.querySelectorAll(".portfolio__image");
const portfolioPopup = document.querySelector(".portfolio__popup");
const portfolioPopupImage = document.querySelector(".portfolio__popup-img");

const portfolioImageController = () => {
    portfolioImages.forEach((item) => {
        item.addEventListener("click", (e) => {
            portfolioPopup.classList.add("active");
            portfolioPopupImage.src = item.getAttribute("src");
        });
    });

    portfolioPopup.addEventListener("click", (e) => {
        if (e.target.closest(".portfolio__btn_popup-close")) {
            portfolioPopup.classList.remove("active");
        }
    });
};
portfolioImageController();

// Header language select
const headerLanguageSelect = document.querySelector(".header__language-select");
const headerLanguageBtn = document.querySelectorAll(".header__btn");

const toggleLanguage = () => {
    headerLanguageSelect.addEventListener("click", (e) => {
        const headerLanguageButton = e.target.closest(".header__btn");

        if (!headerLanguageButton) return;

        headerLanguageBtn.forEach((item) => {
            if (item === headerLanguageButton) {
                item.classList.add("header__btn_active");
            } else {
                item.classList.remove("header__btn_active");
            }
        });
    });
};
toggleLanguage();

// Contacts Form Submit
const contactsForm = document.querySelector(".contacts__form");

contactsForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
