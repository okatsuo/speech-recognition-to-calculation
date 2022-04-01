export const findOperation = (text) => {
  const allowedOperations = ['+', '-', '/', 'x']
  return allowedOperations.find((operation) => text.includes(operation))
}