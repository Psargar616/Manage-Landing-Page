const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

// when hamburger btn is clicked the menu appears using event listeners
btn.addEventListener('click', () => {
    // btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

