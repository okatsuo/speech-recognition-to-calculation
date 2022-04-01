export const calculate = (text, operation) => {
  const [numberOne, numberTwo] = text.split(operation)

  switch (operation) {
    case '+':
      return Number(numberOne) + Number(numberTwo)
    case '-':
      return Number(numberOne) - Number(numberTwo)
    case '/':
      return Number(numberOne) / Number(numberTwo)
    case 'x':
      return Number(numberOne) * Number(numberTwo)
  }
}