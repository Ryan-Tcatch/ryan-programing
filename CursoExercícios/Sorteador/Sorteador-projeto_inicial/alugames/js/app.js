function alterarStatus(IdGame) {
    let Jogo = document.getElementById(`game-${IdGame}`);
    let imagem = Jogo.querySelector('.dashboard__item__img');
    let botao = Jogo.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
        let confirmação = prompt('tem certeza que quer devolver o jogo?')
        let respAceitas = ['sim', 'SIM', 'Sim', 's', 'S']
        if (respAceitas.includes(confirmação)) {
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'alugar';
            imagem.classList.remove('dashboard__item__img--rented');
        }
    } else {
        let confirmação = prompt('tem certeza que quer alugar o jogo?')
        let respAceitas = ['sim', 'SIM', 'Sim', 's', 'S']
        if (respAceitas.includes(confirmação)) {
            botao.classList.add('dashboard__item__button--return');
            botao.innerHTML = 'devolver';
            imagem.classList.add('dashboard__item__img--rented')
        }
    }

    jogosAlugados();

    console.log('concluida');
}

function jogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__button--return');
    let palavraJogo = jogosAlugados.length != 1 ? 'jogos' : 'jogo';
    let palavraAlugado = jogosAlugados.length != 1 ? 'alugados' : 'alugado';
    let palavraEsta = jogosAlugados.length != 1 ? 'estão' : 'está';

    console.log(`${jogosAlugados.length} ${palavraJogo} ${palavraEsta} ${palavraAlugado}.`)
}