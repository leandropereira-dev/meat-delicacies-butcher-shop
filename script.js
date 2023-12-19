window.onscroll = function() {
    const menu = document.querySelector(".coluna-menu");
    if (window.scrollY > 146) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const sessoes = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.coluna-menu a');

    function highlightMenu() {
    let index = sessoes.length;

    while (--index && window.scrollY + 50 < sessoes[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('ativo'));

    if (index >= 0 && index < navLinks.length) {
        navLinks[index].classList.add('ativo');
    } else if (window.scrollY === 0) {
        navLinks[0].classList.add('ativo');
    } else {
        navLinks[navLinks.length - 1].classList.add('ativo');
    }
}
    highlightMenu(); 

    document.addEventListener('scroll', highlightMenu);
});


document.addEventListener('DOMContentLoaded', function () {
    const todosOsMeiosCheckbox = document.getElementById('todosOsMeios');
    const smsCheckbox = document.getElementById('smsCheckbox');
    const emailCheckbox = document.getElementById('emailCheckbox');

    todosOsMeiosCheckbox.addEventListener('click', marcarTodosOsMeios);
    smsCheckbox.addEventListener('click', marcarIndividualmente);
    emailCheckbox.addEventListener('click', marcarIndividualmente);

function marcarTodosOsMeios() {
    const meioNotificacaoCheckboxes = document.querySelectorAll('.meioNotificacao');

    meioNotificacaoCheckboxes.forEach((checkbox) => {
        checkbox.checked = todosOsMeiosCheckbox.checked;
    });
}

function marcarIndividualmente() {
    todosOsMeiosCheckbox.checked = smsCheckbox.checked && emailCheckbox.checked;
}

function validarFormulario() {
    resetErrors();

    const nome = document.getElementById('nome').value;
    if (nome.trim() === '' || nome.split(' ').length < 2) {
        displayError('nomeError', 'Nome não pode estar em branco e deve possuir pelo menos 2 nomes');
        return false;
    }

    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        displayError('emailError', 'E-mail inválido');
        return false;
    }

    const telefone = document.getElementById('telefone').value.replace(/[\s()-]/g, '');
    if (telefone.length !== 11) {
        displayError('telefoneError', 'Telefone deve ter 11 caracteres');
        return false;
    }

    const preferencias = document.querySelectorAll('input[name="preferencias"]:checked');
    if (preferencias.length === 0) {
        displayError('preferenciasError', 'Ao menos uma preferência deve ser marcada');
        return false;
    }

    const carnesFavoritas = document.getElementById('favoritos');
    if (carnesFavoritas.value === 'selecione') {
        displayError('favoritosError', 'Selecione um tipo de carne favorita');
        return false;
    }

    const mensagem = document.getElementById('mensagem').value;
    if (mensagem.trim().length < 5) {
        displayError('mensagemError', 'Mensagem deve ter pelo menos 5 caracteres');
        return false;
    }

    if (!todosOsMeiosCheckbox.checked && !smsCheckbox.checked && !emailCheckbox.checked) {
        displayError('notificacaoError', 'Selecione pelo menos uma opção de notificação');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => {
        element.textContent = '';
    });
}

    const enviarBotao = document.getElementById('enviar');
    enviarBotao.addEventListener('click', validarFormulario);
});