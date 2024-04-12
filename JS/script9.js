var nota1 = parseFloat(prompt("digite valor da primeira nota: "))
var nota2 = parseFloat(prompt("digite valor da segunda nota: "))
var nota3 = parseFloat(prompt("digite valor da terceira nota: "))

var nota_final = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10

alert(`Sua média é: ${nota_final}`)

window.location.href = "index.html"