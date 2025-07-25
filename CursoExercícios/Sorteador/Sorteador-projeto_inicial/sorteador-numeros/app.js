function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero;
    let sorteados = [];
    let intervalo = ate - de

    if (quantidade <= intervalo) {
        for (i = 0; i < quantidade; i++) {
            numero = numeroAleatorio(de, ate);

            while (sorteados.includes(numero)) {
                numero = numeroAleatorio(de, ate);
            }

            sorteados.push(numero);
        }

        resultado = document.getElementById('resultado')
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
    } else {
        resultado = document.getElementById('resultado')
        resultado.innerHTML = `<label class="texto__paragrafo">Não foi possivel sortear, verifique se o intervalo é maior que a quantidade de numeros sorteados </label>`
    }

    botao = document.getElementById('btn-reiniciar')
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');

}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    botao = document.getElementById('btn-reiniciar')

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    alterarStatusBotao()

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  </label>'
}