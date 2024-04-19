var valor = parseInt(prompt("Digite o valor: "))

var verificacao = (valor == 0)  ? "zero" : (valor > 0) ? "Valor positivo" : "Valor negativo"

alert(`${valor} é ${verificacao}`)

window.location.href = "index.html"