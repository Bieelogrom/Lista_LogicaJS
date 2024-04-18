var valor1 = parseFloat(prompt("Digite o primeiro valor: "))
var valor2 = parseFloat(prompt("Digite o segundo valor: "))

if(valor1 > valor2){
    alert(`${valor1} é maior que ${valor2}`)
}else if(valor2 > valor1){
    alert(`${valor2} é maior que ${valor1}`)
}else{
    alert(`${valor1} é igual a ${valor2}`)
}

window.location.href = "index.html"