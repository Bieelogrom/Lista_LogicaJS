var eleitores_municipio = parseInt(prompt("Digite a quantidade de eleitores nessa votação:"));

var votos_brancos = parseInt(prompt("Digite a quantidade de votos brancos: "))
var votos_nulos = parseInt(prompt("Digite a quantidade de votos nulos: "))
var votos_validos = parseInt(prompt("Digite a quantidade de votos validos: "))

var prct_votos_brancos = (votos_brancos / eleitores_municipio) * 100;
var prct_votos_nulos = (votos_nulos / eleitores_municipio) * 100;
var prct_votos_validos = (votos_validos / eleitores_municipio) * 100

alert("De "+ eleitores_municipio +" eleitores que votaram: \n"+ prct_votos_brancos+"% São votos brancos\n"+ prct_votos_nulos+"% São votos nulos\n"+ prct_votos_validos+"% São votos válidos");

window.location.href = "index.html";