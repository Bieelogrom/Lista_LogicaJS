var descricao_produto = prompt("Digite a descrição do produto: ")
var qntd_adquirida = parseInt(prompt("Digite a quantidade adquirida: "))
var preco_unitario = parseFloat(prompt("Digite o valor unitário: "))
var total = preco_unitario * qntd_adquirida
var desconto, valor_final

if(qntd_adquirida <= 5){
    desconto = (2/100) * total
    valor_final = total - desconto
    alert(`Quantidade adquirida: ${qntd_adquirida}\nValor unitário: ${preco_unitario.toFixed(2)}\nTotal: ${total}\nDesconto: ${desconto.toFixed(2)}\nValor final: ${valor_final.toFixed(2)}`)
}else if(qntd_adquirida > 5 && qntd_adquirida <= 10){
    desconto = (3/100) * total
    valor_final =  total - desconto
    alert(`Quantidade adquirida: ${qntd_adquirida}\nValor unitário: ${preco_unitario.toFixed(2)}\nTotal: ${total}\nDesconto: ${desconto.toFixed(2)}\nValor final: ${valor_final.toFixed(2)}`)
}else{
    desconto = (5/100) * total
    valor_final =  total - desconto
    alert(`Quantidade adquirida: ${qntd_adquirida}\nValor unitário: ${preco_unitario.toFixed(2)}\nTotal: ${total}\nDesconto: ${desconto.toFixed(2)}\nValor final: ${valor_final.toFixed(2)}`)
}

window.location.href = "index.html"