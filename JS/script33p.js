var valor1 = parseInt(prompt("Digite o primeiro valor: "))
var valor2 = parseInt(prompt("Digite o segundo valor: "))

var resposta = (valor1 == valor2) ? "Numeros iguais" : (valor1 > valor2) ? "Primeiro é maior" : "Segundo é maior"

alert(resposta)

window.location.href = "index.html"