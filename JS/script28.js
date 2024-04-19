var valor1 = parseInt(prompt("Digite o primeiro valor: "))
var valor2 = parseInt(prompt("Digite o segundo valor: "))
var valor3 = parseInt(prompt("Digite o tereiro valor: "))

var maiorNumero = (valor1 >= valor2 && valor1 >= valor3) ? `${valor1} é o maior valor!` : (valor2 >= valor1 && valor2 >= valor3) ? `${valor2} é o maior valor!` : (valor3 >= valor1 && valor3 >= valor2) ? `${valor3} é o maior valor!` : "Todos os números são iguais!"

alert(maiorNumero)

window.location.href = "index.html"