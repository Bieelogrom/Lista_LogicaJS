var hora_inicio = parseInt(prompt("Digite a hora de inicio do jogo: "));
var hora_fim = parseInt(prompt("Digite a hora de fim do jogo: "));

var duracao_jogo;

if(hora_fim >= hora_inicio){
    duracao_jogo = hora_inicio - hora_fim;
    alert(`Tempo de jogo ${duracao_jogo}h de jogo`)
}else{
    duracao_jogo = (hora_fim + 24) - hora_inicio;
    alert(`Tempo de jogo ${duracao_jogo}h de jogo`)
}

window.location.href = "index.html"
