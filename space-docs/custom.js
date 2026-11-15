document.addEventListener("DOMContentLoaded", function () {
    const titleArea = document.getElementById("titlearea");
    const mainNav = document.getElementById("main-nav");

    if (titleArea && mainNav) {
        titleArea.appendChild(mainNav);
    }
});
