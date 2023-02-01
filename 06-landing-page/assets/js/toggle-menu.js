const toggleMenuElement = document.querySelector("#toggle-menu");
const mainMenuElement = document.querySelector("#main-header__nav");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("main-header__nav--show");
});
