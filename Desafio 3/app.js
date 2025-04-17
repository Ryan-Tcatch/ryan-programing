let altura = parseFloat(prompt('altura em metros (use o ponto para separar as casas decimais das inteiras)'));
let peso = parseFloat(prompt('peso em Kg (use o ponto para separar as casas decimais das inteiras)'));

console.log(altura);
console.log(peso);

function calcularIMC(h, p,) {
  let IMC = p /= (h * h);
  let resultadoIMC = parseInt(IMC)
  console.log(`o IMC é igual a ${resultadoIMC}`)
} // h=altura p=peso

calcularIMC(altura, peso,);

let numeroFator = parseInt(prompt('escolha um numero inteiro'))

function fatorizar(num) {
  let resultado = num;
  if (num == 0 || num == 1)
    console.log(1);
  while (num > 1) {
    num--;
    resultado *= num;
  }
  console.log(resultado);
} // num = numero
fatorizar(numeroFator);

let dolar = parseFloat(prompt('valor em dolar (use o ponto para separar as casas decimais das inteiras)'));

function conversãoRealDolar(valor) {
  let resultado = valor * 4.8;
  console.log(resultado);
}

conversãoRealDolar(dolar);

let largura = parseFloat(prompt('valor da largura (use o ponto para separar as casas decimais das inteiras)'));
let comprimento = parseFloat(prompt('valor do comprimento(use o ponto para separar as casas decimais das inteiras)'));

function calcularAreaPerímetro(lar, com, lar2, com2,) {
  let area = lar *= com;
  let perimetro = com2 += lar2;
  perimetro *= 2;
  console.log(area);
  console.log(perimetro);
  alert(`a area é igual a ${area} e o perimetro é ${perimetro}`);
} // lar = largura e com = comprimento

calcularAreaPerímetro(largura, comprimento, largura, comprimento);

let raio = parseFloat(prompt('valor do raio(use o ponto para separar as casas decimais das inteiras)'));

function calcularAreaCirculo(r) {
  let perimetro = r *= 2;
  perimetro *= 3.14;
  let area = r ** 2;
  area *= 3.14;
  console.log(area);
  console.log(perimetro);
  alert(`a area é igual a ${area} e o perimetro é ${perimetro}`);
}// r = raio

calcularAreaCirculo(raio);