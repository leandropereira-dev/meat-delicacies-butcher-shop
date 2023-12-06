window.onscroll = function() {
    const menu = document.querySelector(".coluna-menu");
    if (window.scrollY > 146) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.coluna-menu a');

    function highlightMenu() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('ativo'));

    if (index >= 0 && index < navLinks.length) {
        navLinks[index].classList.add('ativo');
    } else if (window.scrollY === 0) {
        // Se estiver no topo da página, manter ativo na navegação da "home"
        navLinks[0].classList.add('ativo');
    } else {
        // Se chegou ao topo da última seção, manter ativo na última navegação
        navLinks[navLinks.length - 1].classList.add('ativo');
    }
}
    highlightMenu(); 

    document.addEventListener('scroll', highlightMenu);
});