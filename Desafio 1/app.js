function saudarMundo() {
console.log('Olá mundo');
}
saudarMundo()
    
function saudarUsuário() {
    let nome = prompt('qual seu nome?');
    console.log(`olá ${nome}`);
}
saudarUsuário()    

function dobrarNumero() {
    let numero = parseInt(prompt('escreva um numero'));
    let dobro = numero*2;
    console.log(`o dobro de ${numero} é ${dobro}`);
}
dobrarNumero()

let primeiroNumero= parseInt(prompt('escreva o primeiro número'));
let segundoNumero = parseInt(prompt('escreva o segundo número'));
let terceiroNumero = parseInt(prompt('escreva o terceiro número'));

console.log(primeiroNumero);
console.log(segundoNumero);
console.log(terceiroNumero);
    
function tirarMédia( numeroUm, numeroDois, numeroTres, ) {
    soma = (numeroUm += numeroDois += numeroTres) / 3 ;
    alert(`a média dos numeros é ${soma}`);
}
tirarMédia( primeiroNumero, segundoNumero, terceiroNumero,)

let numeroA = parseInt(prompt('escreva um número'));
let numeroB = parseInt(prompt('escreva outro número'));

console.log (numeroA);
console.log (numeroB);

function maiorNumero( numA, numB,) {
    if ( numA > numB ) {
        alert (`o maior numero é ${numA}`);
    } else {
        if ( numA < numB ) {
            alert (`o maior numero é ${numB}`);
        }else {
            alert ('os numeros são iguais');
        }
    }
}

maiorNumero( numeroA, numeroB,);

let numeroC = parseInt(prompt('escreva um número'));
console.log (numeroC);

function tirarPotencia(numC) {
let potencia = (numC *= numC)
console.log (`o quadrado do numero ${potencia}`);
}

tirarPotencia(numeroC);