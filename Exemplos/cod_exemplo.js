// 

function TestaCodigo() {
    let idade = parseInt(prompt("Digite a sua idade: "))
    let mensagem = (idade < 18) ? "Não pode beber ainda!" : "Já pode tomar uma."

    if (idade < 16) {
        alert("Você não pode votar!")
        alert(mensagem)
    } else if (idade < 18) {
        alert("Voto opcional.")
        alert(mensagem)
    } else if (idade >= 18) {
        alert("Voto obrigatório!")
        alert(mensagem)
    }
}

function TestaCodigo_Dois() {
    let idade = parseInt(prompt("Digite a sua idade: "))
    let mensagem = (idade < 16) ? "Você não pode votar!" : (idade < 18) ? "Voto opcional!":"Voto obrigatório!"
    alert(mensagem)
}

function DiasDaSemana(){
    let dias_da_semana = parseInt(prompt("Digite o seu dia da semana: "));
    let mensagem = (dias_da_semana==1)?"Domingo":(dias_da_semana==2)?"Segunda":(dias_da_semana==3)?"Terça":(dias_da_semana==4)?"Quarta":(dias_da_semana==5)?"Quinta":(dias_da_semana==6)?"Sexta":"Sabado"
    alert(mensagem)
}   

function MesesDoAno(){
    let mes_do_ano = parseInt(prompt("Digite o mês do ano: "));
    let mensagem = (mes_do_ano==1)?"Janeiro":(mes_do_ano==2)?"Fevereiro":(mes_do_ano==3)?"Março":(mes_do_ano==4)?"Abril":(mes_do_ano==5)?"Maio":(mes_do_ano==6)?"Junho":(mes_do_ano==7)?"Julho":(mes_do_ano==8)?"Agosto":(mes_do_ano==9)?"Setembro":(mes_do_ano==10)?"Outubro":(mes_do_ano==11)?"Novembro":(mes_do_ano==12)?"Dezembro":"Mês não reconhecido"
    alert(mensagem)
}   

function testaWhile(){
    var contadora = 1;

    while(contadora <= 10){
        alert(contadora)
        contadora++
    }
}

function calculadoraGb(){
    var valor = parseInt(prompt("Digite o valor: "))
    var contadora = 1;

    while(contadora <= 10){
        alert(valor + "X" + contadora + "=" + (valor * contadora))
        contadora++
    }
}

function ContadoraIncrementa(){
    let contadora = 1;

    while(contadora <= 100){
        alert(contadora)
        contadora++
    }
}

function SomaDois(){
    // 1 até 43 sem 39
}

function alterarFundo(){


    document.getElementsByTagName('body')[0].style.background =  "#93E1D8"
}


function calculaIdade(){
    var idade_da_pessoa = parseInt(prompt("Digite a sua idade: "))
    var habilitacao = parseInt(prompt("Você é habilitado? \n 1 - Sim ou 2 - Não"))

    if(idade_da_pessoa >= 18 && habilitacao == 1){
        alert("Você já pode dirigir, pois é habilitado e tem idade o suficiente!")
    }else{
        alert("Você não pode dirigir, pois é não é habilitado e não tem idade o suficiente!")
    }


}

function calculaIdadeOU(){
    var idade_da_pessoa = parseInt(prompt("Digite a sua idade: "))
    var habilitacao = parseInt(prompt("Você é habilitado? \n 1 - Sim ou 2 - Não"))

    if(idade_da_pessoa >= 18 || habilitacao == 1){
        alert("Você já pode dirigir!")
    }else{
        alert("Você não pode dirigir!")
    }
}



function portaLogicaNao(){
    var idade_da_pessoa = parseInt(prompt("Digite a sua idade: "))
    var habilitacao = parseInt(prompt("Você é habilitado? \n 1 - Sim ou 2 - Não"))

    if(!(idade_da_pessoa >= 18 && habilitacao == 1)){
        alert("Você já pode dirigir, pois é habilitado e tem idade o suficiente!")
    }else{
        alert("Você não pode dirigir, pois é não é habilitado e não tem idade o suficiente!")
    }

}

function portaLogicaNaoOU(){
    var idade_da_pessoa = parseInt(prompt("Digite a sua idade: "))
    var habilitacao = parseInt(prompt("Você é habilitado? \n 1 - Sim ou 2 - Não"))

    if(!(idade_da_pessoa >= 18 || habilitacao == 1)){
        alert("Você já pode dirigir!")
    }else{
        alert("Você não pode dirigir!")
    }
}
