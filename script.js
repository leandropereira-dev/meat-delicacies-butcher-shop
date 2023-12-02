window.onscroll = function() {
    const menu = document.querySelector(".coluna-menu");
    if (window.scrollY > 146) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
};
