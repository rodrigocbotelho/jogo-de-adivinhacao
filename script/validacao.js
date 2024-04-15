function checkedValidValue(chute) {
    numero = +chute;
    let resultado, audio;
    const setaDica = numero > numeroSecreto ? `<div>O número é menor <i class="fa-solid fa-arrow-down"></i></div>` : `<div>O número é maior <i class="fa-solid fa-arrow-up"></i></div>`;

    if (chute == "desisto") {
        resultado = "Desistiu";
        audio = "gameover.mp3";
        document.body.innerHTML = EndScreen(resultado, audio);
    }

    if (chute === "jogar novamente") window.location.reload(true);

    if (Number.isNaN(numero)) {
        $chute.innerHTML += '<div>Valor inválido</div>'
        return
    };

    if (numero > maiorValor || numero < menorValor) {
        $chute.innerHTML += `<div>O número secreto está entre ${menorValor} e ${maiorValor}</div>`;
    }

    $chute.innerHTML += setaDica;

    if (numero === numeroSecreto) {
        resultado = "Acertou";
        audio = "acerto.mp3";
        document.body.innerHTML = EndScreen(resultado, audio);
    }
    
}

function EndScreen(resultado, audio) {
    const telaFinal = `
    <h1>VOCÊ ${resultado}!</h1>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="jogar-novamente">Jogar Novamente</button>
    <audio src="sons/${audio}" autoplay></audio>
    `;

    if (resultado == "Acertou") {
        document.body.style.color = '#fff';
        document.body.style.background = `#00FF00`;
    } else {
        document.body.style.background = `red`;
        document.body.style.color = '#fff';
    }

    return telaFinal;
}

document.body.addEventListener(`click`, e => {
    if (e.target.id == `jogar-novamente`) window.location.reload(true);
})
