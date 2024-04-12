let carros_vendidos = parseInt(prompt("Digite a quantidade de carros vendidos: "))
let salario_fixo = parseFloat(prompt("Digite o valor do seu salário fixo: "))
let comissao = parseFloat(prompt("Digite o valor da sua comissão fixa: "))

let vendas_total = (carros_vendidos * comissao)
vendas_total += (5/100*vendas_total) + (salario_fixo)

alert(
    "Carros comprados: "+ carros_vendidos+"\n"
    +"Salário fixo mensal: "+ salario_fixo+"\n"
    +"Comissão total: "+ comissao+"\n"
    +"Você lucrou: "+ vendas_total+ " parabéns!!"
)

window.location.href = "index.html"