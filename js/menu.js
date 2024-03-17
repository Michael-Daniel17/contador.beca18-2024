const menu = document.getElementById("menu");
const menuLateral = document.querySelector(".opciones");
const menuLateralChilds = document.querySelector(".opciones");
const closeMenu = document.getElementById("close-menu");

menu.addEventListener("click", () => {
    menuLateral.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    menuLateral.classList.remove("active");
})

document.addEventListener("click", (e) => {
    if (e.target.matches(".opciones *")) {
        menuLateral.classList.remove("active");
    }
    if (!menu.contains(e.target) && !menuLateral.contains(e.target)) {
        menuLateral.classList.remove("active");
    }
});


