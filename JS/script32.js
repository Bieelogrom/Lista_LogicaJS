var timeA = prompt("Digite o nome do time A: ")
var pontuacao_timaA = parseInt(prompt("Digite a pontuação do time A: "))
var timeB = prompt("Digite o nome do time B: ")
var pontuacao_timaB = parseInt(prompt("Digite a pontuação do time B: "))

if(pontuacao_timaA > pontuacao_timaB){
    alert(`${timeA} venceu por ${pontuacao_timaA}!!!`)
}else if(pontuacao_timaB > pontuacao_timaA){
    alert(`${timeB} venceu por ${pontuacao_timaB}!!!`)
}else{
    alert(`Empate!!`)
}

window.location.href = "index.html"