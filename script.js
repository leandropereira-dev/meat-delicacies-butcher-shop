window.onscroll = function() {
    const menu = document.querySelector(".coluna-menu");
    if (window.scrollY > 150) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
};
