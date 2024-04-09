let custoFabrica = parseFloat(prompt("Digite o valor de fabricação do carro :"))
let custoDistribuidor = 28/100*custoFabrica
let custoImposto = 45/100*custoFabrica
let custoFinal=custoDistribuidor+custoFabrica+custoImposto;
alert("Custo total do carro: "+ custoFinal.toFixed(2))

window.location.href = "index.html"