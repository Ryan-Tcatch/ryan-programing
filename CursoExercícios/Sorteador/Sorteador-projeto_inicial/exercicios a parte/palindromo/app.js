
function verificar() {
    let Texto = document.getElementById('Wrd').value;
    let Resultado = document.getElementById('resultado');
    if (verificarPalindromo(Texto)) {
        console.log('é um palindromo');
        Resultado.innerText = 'É um palíndromo';
    } else {
        console.log('não é um palindromo');
        Resultado.innerText = 'Não é um palíndromo';
    }
}

function verificarPalindromo(Texto) {
    let formatada = Texto.toLowerCase();
    formatada = formatada.replace(/[^a-z0-9]/g, '');
    console.log(formatada);
    let invertida = formatada.split('').reverse().join('');
    console.log(formatada);
    return formatada == invertida;
}

