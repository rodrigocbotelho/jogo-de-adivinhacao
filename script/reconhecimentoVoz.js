const $chute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    valor = e.results[0][0].transcript;
    screenOnDisplay(valor);
    checkedValidValue(valor);
}

function screenOnDisplay(chute) {
    $chute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>`;
}

recognition.addEventListener(`end`, () => recognition.start());