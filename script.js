const formNickname = document.querySelector('#form-nickname');
const inputNickname = document.querySelector('#nickname');
const selectGenero = document.querySelector('#genero');

formNickname.addEventListener('submit', event => {
    event.preventDefault();

    const nickname = inputNickname.value.trim();
    if (!nickname) {
        inputNickname.setCustomValidity('Digite um nickname para começar.');
        inputNickname.reportValidity();
        return;
    }

    const identidade = {
        feminino: 'A garota',
        masculino: 'O garoto',
        neutro: 'A pessoa'
    }[selectGenero.value];

    document.querySelectorAll('.passo').forEach(passo => {
        const walker = document.createTreeWalker(passo, NodeFilter.SHOW_TEXT);
        let texto;

        while ((texto = walker.nextNode())) {
            texto.textContent = texto.textContent
                .replaceAll('{{nickname}}', nickname)
                .replaceAll('{{identidade}}', identidade);
        }

        passo.querySelectorAll('img[alt]').forEach(imagem => {
            imagem.alt = imagem.alt.replaceAll('{{nickname}}', nickname);
        });
    });

    document.querySelector('.ativo').classList.remove('ativo');
    document.querySelector('#passo-0').classList.add('ativo');
});

inputNickname.addEventListener('input', () => inputNickname.setCustomValidity(''));

const avanca = document.querySelectorAll('.passo .btn-proximo[data-proximo]');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const destino = this.getAttribute ('data-proximo');
        const proximoPasso = destino.startsWith('passo-')
            ? destino
            : 'passo-' + destino;

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})