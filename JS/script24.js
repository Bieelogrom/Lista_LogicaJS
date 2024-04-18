var salario_fixo = parseFloat(prompt("Digite o valor do seu salário: "))
var valor_vendas = parseFloat(prompt("Digite o valor das suas vendas: "))

var valor_total = (valor_vendas <= 1500) ? salario_fixo+valor_vendas+((3/100)*valor_vendas) : salario_fixo+valor_vendas+((5/100)*(valor_vendas-1500))

alert(`Você recebeu : ${valor_total}R$`)

window.location.href = "index.html"
