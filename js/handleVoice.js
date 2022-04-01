import { getResultFromVoice } from './getResultFromVoice.js';
import { recognition, stopVoice } from './initSpeechRecognition.js'
import './handleListening.js'

recognition.onresult = function (event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      const text = event.results[i][0].transcript.trim();
      stopVoice()
      getResultFromVoice(text)
    }
  }
};
