import { calculate } from './calculate.js';
import { findOperation } from './checkOperation.js'

const output = document.querySelector('#output');

const writeOutput = (text) => output.textContent = text

const formatResult = (result) => result.toString().includes(".") ? result.toFixed(2) : result

export const getResultFromVoice = (text) => {
  const operation = findOperation(text)
  if (!operation) return writeOutput(`Operação não compreendida, o escutado foi: ${text}`)
  const result = calculate(text, operation)
  const formatedResult = formatResult(result)
  return writeOutput(`O resultado é ${formatedResult}`)
}