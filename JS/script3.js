
var ano_nascimento = parseInt(prompt("Digite sua idade: "))
var mesversario = parseInt(prompt("Digite quantos meses passaram desde seu último aniversário: "))

var idade_em_dias = (ano_nascimento * 365) + (mesversario * 30);

alert("Você tem "+ idade_em_dias +" dias de vida!");

window.location.href = "index.html";