const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = randomNumberGenerator();

const $menorValor = document.getElementById('menor-valor').innerHTML = menorValor;
const $maiorValor = document.getElementById('maior-valor').innerHTML = maiorValor;

function randomNumberGenerator() {
    return Math.floor(Math.random() * maiorValor + 1);
}
