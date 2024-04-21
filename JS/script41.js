var nota1 = parseFloat(prompt("Digite a primeira nota: "))
var nota2 = parseFloat(prompt("Digite a segunda nota: "))
var nota3 = parseFloat(prompt("Digite a terceira nota: "))
var media_exercicios = parseFloat(prompt("Digite a média dos exercícios: "))

var media_de_aproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + media_exercicios)/7

if(media_de_aproveitamento >= 9){
    alert(`Sua média de aproveitamento : ${media_de_aproveitamento}\nConceito A.`)
}else if(media_de_aproveitamento >= 7.5 && media_de_aproveitamento < 9){
    alert(`Sua média de aproveitamento : ${media_de_aproveitamento}\nConceito B.`)
}else if(media_de_aproveitamento >= 6 && media_de_aproveitamento < 7.5){
    alert(`Sua média de aproveitamento : ${media_de_aproveitamento}\nConceito C.`)
}else{
    alert(`Sua média de aproveitamento : ${media_de_aproveitamento}\nConceito D.`)
}

window.location.href = "index.html"
