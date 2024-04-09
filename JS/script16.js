
var qntd_macas = parseInt(prompt("Digite a quantidade de maças compradas: "));

if(qntd_macas >= 12){
    var preco_macas = qntd_macas * 1.00;

    alert("Maças compradas: "+ qntd_macas + "\n Valor total: R$"+ preco_macas.toFixed(2))
}else{
    var preco_macas = qntd_macas * 1.30;

    alert("Maças compradas: "+ qntd_macas + "\n Valor total: R$"+ preco_macas.toFixed(2))
}