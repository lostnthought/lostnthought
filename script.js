
const toggleButton = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
    toggleButton.textContent = "light";
}
else
{
    toggleButton.textContent = "dark";
}

toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
    
    // Save preference to localStorage
    if (document.documentElement.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = "light";
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = "dark";
    }
});
