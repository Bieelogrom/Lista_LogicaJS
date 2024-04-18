var nota1 = parseFloat(prompt("Digite a primeira nota: "))
var nota2 = parseFloat(prompt("Digite a segunda nota: "))

var media = (nota1 + nota2)/2

if(media >= 6){
    alert(`Você foi aprovado! \n Sua média: ${media}`)
}else{
    alert(`Você foi reprovado! \n Sua média: ${media}`)
}

window.location.href = "index.html"