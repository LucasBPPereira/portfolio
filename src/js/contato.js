// Não realizado

const botaoForm = document.querySelector('.btn__contato');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    botaoForm.addEventListener("click", () => {
        console.log('Encaminhamento em desenvolvimento');;
    })
})
