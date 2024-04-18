var macas_compradas = parseInt(prompt("Digite a quantidade de maças compradas: "))

if(macas_compradas >= 12){
    var preco_compra = macas_compradas * 1.00;
    alert(`Você comprou ${macas_compradas} maças e gastou ao total ${preco_compra}R$`)
}else{
    var preco_compra = macas_compradas * 1.30;
    alert(`Você comprou ${macas_compradas} maças e gastou ao total ${preco_compra}R$`)
}

window.location.href = "index.html"