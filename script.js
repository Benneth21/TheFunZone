document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const body = document.body;

    // Create a radial gradient effect around the mouse
    body.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--hover-color), var(--background-color) 70%)`;
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none'; // Menü nach der Animation verstecken
        }, 300); // Warte zeit für die Animation
    } else {
        menu.style.display = 'block'; // Menü anzeigen
        setTimeout(() => {
            menu.classList.add('show');
        }, 10); // Kurze Verzögerung, um die Animation zu ermöglichen
    }
}

function toggleTheme() {
    const body = document.body;
    const toggleSwitch = document.getElementById('theme-toggle');
    
    if (toggleSwitch.checked) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}