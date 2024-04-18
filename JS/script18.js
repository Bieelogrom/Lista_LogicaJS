var ano_atual = parseInt(prompt("Digite o ano que estamos: "))
var ano_nascimento = parseInt(prompt("Digite o ano do seu nascimento: "))

var idade_pessoa = ano_atual - ano_nascimento

if(idade_pessoa >= 18){
    alert(`Você pode votar! \n tem ${idade_pessoa} de idade.`)
}else{
    alert(`Você não pode votar! \n tem ${idade_pessoa} de idade.`)
}

window.location.href = "index.html"