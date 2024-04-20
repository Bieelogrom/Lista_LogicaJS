var X = parseInt(prompt("Digite o valor de X: "))
var Y = parseInt(prompt("Digite o valor de Y: "))
var Z = (X * Y) + 5

if(Z <= 0){
    alert(`A - ${Z}`)
}else if(Z <= 100){
    alert(`B - ${Z}`)
}else{
    alert(`C - ${Z}`)
}

window.location.href = "index.html"
