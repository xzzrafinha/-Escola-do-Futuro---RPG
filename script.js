const avanca = document.querySelectorAll ('.btn-proximo');

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