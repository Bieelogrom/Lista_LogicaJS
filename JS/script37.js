var qntd_morangos = parseFloat(prompt("Digite a quantidade de quilos comprados de morangos: "))
var qntd_macas = parseFloat(prompt("Digite a quantidade de quilos comprados de maças: "))
var valor_sem_desconto_morango, valor_sem_desconto_maca, valor_final;
var qntd_kg_total_da_compra = qntd_macas + qntd_morangos


if(qntd_macas > 0 && qntd_macas < 5 || qntd_morangos > 0 && qntd_morangos < 5){
    valor_sem_desconto_maca = qntd_macas * 1.80
    valor_sem_desconto_morango = qntd_morangos * 2.50
    valor_final = valor_sem_desconto_maca + valor_sem_desconto_morango
    alert(`Você comprou : ${qntd_kg_total_da_compra}KG de frutas.\nMaças foram : ${qntd_macas}\nMorangos foram : ${qntd_morangos}\nGastando ao final : ${valor_final}`)
}else{
    valor_sem_desconto_maca = qntd_macas * 1.50
    valor_sem_desconto_morango = qntd_morangos * 2.20
    valor_final = valor_sem_desconto_maca + valor_sem_desconto_morango

    if(qntd_kg_total_da_compra > 8 || valor_final > 25.00){
        valor_final -= (10/100) * valor_final
        alert(`Você comprou : ${qntd_kg_total_da_compra}KG de frutas.\nMaças foram : ${qntd_macas}\nMorangos foram : ${qntd_morangos}\nDesconto de : ${(10/100) * valor_final}\nGastando ao final : ${valor_final}`)
    }else{
        alert(`Você comprou : ${qntd_kg_total_da_compra}KG de frutas.\nMaças foram : ${qntd_macas}\nMorangos foram : ${qntd_morangos}\nGastando ao final : ${valor_final}`)
    }
}

window.location.href = "index.html"



