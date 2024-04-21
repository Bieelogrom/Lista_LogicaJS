var cod_funcionario = parseInt(prompt("Digite o código do funcionário: "))
var ano_nasc_funcionario = parseInt(prompt("Digite o ano de nascimento do funcionário: "))
var ingresso_funcionario = parseInt(prompt("Digite o ano de ingresso do funcionário na empresa: "))

var idade_funcionario = 2024 - ano_nasc_funcionario
var tempo_empresa = 2024 - ingresso_funcionario

if(idade_funcionario >= 65 || tempo_empresa >= 30){
    alert(`O funcionário tem ${idade_funcionario} de idade.\nCom ${tempo_empresa} anos de empresa.\nRequerer aposentadoria?`)
}else if(idade_funcionario >= 60 && tempo_empresa >= 25){
    alert(`O funcionário tem ${idade_funcionario} de idade.\nCom ${tempo_empresa} anos de empresa.\nRequerer aposentadoria?`)
}else{
    alert(`O funcionário tem ${idade_funcionario} de idade.\nCom ${tempo_empresa} anos de empresa.\nNão requerer.`)

}

window.location.href = "index.html"