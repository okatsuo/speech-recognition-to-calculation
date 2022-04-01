import { startVoice, stopVoice } from './initSpeechRecognition.js'

const startBtn = document.querySelector('#start');

let isListening = false
startBtn.addEventListener('click', () => {
  isListening = !isListening
  isListening ? startVoice() : stopVoice()
});
