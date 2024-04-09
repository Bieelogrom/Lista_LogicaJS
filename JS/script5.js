

var salario_atual = parseFloat(prompt("Digite o seu salário: "));
var taxa_reajuste = parseInt(prompt("Digite o valor percentual do reajuste: "))

var salario_reajustado = salario_atual + (salario_atual * taxa_reajuste)/100

alert("O seu salário ajustado é de: "+ salario_reajustado)

window.location.href = "index.html"

