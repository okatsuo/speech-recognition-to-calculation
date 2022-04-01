const listening = document.querySelector('#listening');

export const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;
recognition.lang = "pt-BR";
recognition.continuous = true;


export const startVoice = () => {
  recognition.start()
  listening.style.display = 'inline-block'
}

export const stopVoice = () => {
  recognition.stop()
  listening.style.display = 'none'
}