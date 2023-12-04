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
      navLinks[index].classList.add('ativo');
    }

    highlightMenu(); // Initial call to highlight menu based on current position

    document.addEventListener('scroll', highlightMenu);
  });