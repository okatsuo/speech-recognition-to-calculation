import { getResultFromVoice } from './calculate.js';

const startBtn = document.querySelector('#start');
const listening = document.querySelector('#listening');

const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;
recognition.lang = "pt-BR";
recognition.continuous = true;

const startVoice = () => {
  recognition.start()
  listening.style.display = 'inline-block'
}

const stopVoice = () => {
  recognition.stop()
  listening.style.display = 'none'
}

recognition.onresult = function (event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      const text = event.results[i][0].transcript.trim();
      getResultFromVoice(text)
      stopVoice()
    }
  }
};

let isListening = false
startBtn.addEventListener('click', () => {
  isListening = !isListening
  isListening ? startVoice() : stopVoice()
});

