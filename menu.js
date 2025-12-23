const menuOpen = document.getElementById("open");
const menuClose = document.getElementById("close");
const menu = document.getElementById("menu");

menuOpen.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});

menuClose.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})