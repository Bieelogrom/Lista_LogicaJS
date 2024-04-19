var qntd_atual_estoque = parseInt(prompt("Digite a quantidade atual em estoque: "))
var qntd_maxima_estoque = parseInt(prompt("Digite a quantidade máxima do estoque: "))
var qntd_minima_estoque = parseInt(prompt("Digite a quantidade mínima do estoque: "))

var media_estoque = (qntd_maxima_estoque + qntd_minima_estoque)/2

var decisao_final = (qntd_atual_estoque >= media_estoque) ? "Não efetuar compra" : "Efetuar compra"
alert(`${decisao_final}`)

window.location.href = "index.html"