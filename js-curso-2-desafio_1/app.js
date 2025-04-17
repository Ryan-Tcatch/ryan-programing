let titulo = document.querySelector('h1');
titulo.innerHTML = 'hora do desafio';

function verificarClique() {
    console.log('o botão foi clicado');
}

function gerarAlert() {
    alert('Eu amo JS');
}

function executarPrompt() {
    let resultadoPrompt = prompt('escreva o nome de uma cidade do Brasil');
    alert(`fui a ${resultadoPrompt} e lembrei de você`);
}

function somarNumeros() {
    let primeiroNumero= parseInt(prompt('escreva o primeiro número'));
    let segundoNumero = parseInt(prompt('escreva o segundo número'));
    let soma = primeiroNumero += segundoNumero;
    alert(`a soma é ${soma}`);
}