import { hasOperation } from './checkOperation.js'
const output = document.querySelector('#output');

export const getResultFromVoice = (text) => {
  const operation = hasOperation(text)
  if (!operation) return output.textContent = `Operação não compreendida, o escutado foi: ${text}`
  const result = calculate(text, operation)
  return output.textContent = `O resultado é ${result}`;
}

const calculate = (text, operation) => {
  const teste = text.split(operation)
  switch (operation) {
    case '+':
      return Number(teste[0]) + Number(teste[1])
    case '-':
      return Number(teste[0]) - Number(teste[1])
    case '/':
      return Number(teste[0]) / Number(teste[1])
    case 'x':
      return Number(teste[0]) * Number(teste[1])
  }
}