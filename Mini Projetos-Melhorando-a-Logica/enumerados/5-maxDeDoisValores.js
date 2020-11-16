function maiorDeDois(a, b) {
  return Math.max(a, b)
}
console.log(maiorDeDois(5, 20))

//ou

function max(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

console.log(max(30, 50))

//ou

function maioral(n1, n2) {
  return n1 > n2 ? n1 : n2
}
console.log('Condição ternária', maioral(59, 89))