const menuOpen = document.getElementById("open");
const menuClose = document.getElementById("close");
const menu = document.getElementById("menu");

menuOpen.addEventListener('pointerdown', () => {
    menu.classList.toggle('hidden')
});

menuClose.addEventListener('pointerdown', () => {
    menu.classList.toggle('hidden')
})