export const hasOperation = (text) => {
  const allowedOperations = ['+', '-', '/', 'x']
  return allowedOperations.find((operation) => text.includes(operation))
}