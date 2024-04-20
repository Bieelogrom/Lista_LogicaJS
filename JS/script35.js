var num_litros_vendidos = parseFloat(prompt("Digite a quantidade de litros vendidos: "))
var tipo_combustivel = prompt("Digite o tipo de combustível: \nG - Gasolina\nA - Álcool")
var valor_sem_desconto, desconto, total;

if(tipo_combustivel == "G" || tipo_combustivel == "g"){
    if(num_litros_vendidos <= 20){
        valor_sem_desconto = num_litros_vendidos * 3.30;
        desconto = (4/100) * valor_sem_desconto;
        total = valor_sem_desconto - desconto;
        alert(`Você encheu ${num_litros_vendidos.toFixed(2)} litros do seu carro com gasolina.\nValor sem desconto : ${valor_sem_desconto}\nValor do desconto : ${desconto.toFixed(2)}\nValor final : ${total.toFixed(2)}`)
    }else{
        valor_sem_desconto = num_litros_vendidos * 3.30;
        desconto = (6/100) * valor_sem_desconto;
        total = valor_sem_desconto - desconto;
        alert(`Você encheu ${num_litros_vendidos.toFixed(2)} litros do seu carro com gasolina.\nValor sem desconto : ${valor_sem_desconto.toFixed(2)}\nValor do desconto : ${desconto.toFixed(2)}\nValor final : ${total.toFixed(2)}`)
    }
}else if(tipo_combustivel == "A" || tipo_combustivel == "a"){
    if(num_litros_vendidos <= 20){
        valor_sem_desconto = num_litros_vendidos * 2.90;
        desconto = (3/100) * valor_sem_desconto;
        total = valor_sem_desconto - desconto;
        alert(`Você encheu ${num_litros_vendidos.toFixed(2)} litros do seu carro com álcool.\nValor sem desconto : ${valor_sem_desconto.toFixed(2)}\nValor do desconto : ${desconto.toFixed(2)}\nValor final : ${total.toFixed(2)}`)
    }else{
        valor_sem_desconto = num_litros_vendidos * 2.90;
        desconto = (5/100) * valor_sem_desconto;
        total = valor_sem_desconto - desconto;
        alert(`Você encheu ${num_litros_vendidos.toFixed(2)} litros do seu carro com álcool.\nValor sem desconto : ${valor_sem_desconto.toFixed(2)}\nValor do desconto : ${desconto.toFixed(2)}\nValor final : ${total.toFixed(2)}`)
    }
}