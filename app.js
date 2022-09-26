let wrapper = document.querySelector('.big-wrapper');
hamburger_menu = document.querySelector(".hamburger-menu");
let toggleDarkMode = () => {
  wrapper.classList.toggle('dark');
  hamburger_menu.classList.toggle('dark');
}
let toggleDarkModeBtn = document.querySelector('.toggle-btn');
toggleDarkModeBtn.addEventListener('click', toggleDarkMode);
hamburger_menu.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});