function ordenar() {
    let Ordenados = [];
    let containerTexto = document.getElementById('resultado');
    for (i = 3; i > 0; i--) {
        let Num = document.getElementById(`${i}`).value;
        Ordenados.push(Num);
    };
    console.log(Ordenados);

    resultado = Ordenados.sort((a, b) => a - b);

    console.log(Ordenados);
    containerTexto.innerText = `ordem: ${resultado}`;
}