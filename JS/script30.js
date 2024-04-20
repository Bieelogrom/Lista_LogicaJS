var valor1 = parseInt(prompt("Digite o primeiro valor: "))
var valor2 = parseInt(prompt("Digite o segundo valor: "))
var valor3 = parseInt(prompt("Digite o terceiro valor: "))

if(valor1 >= valor2 && valor1 >= valor3){
    if(valor2 >= valor3){
        alert(`${valor3}, ${valor2}, ${valor1}`)
    }else{
        alert(`${valor2}, ${valor3}, ${valor1}`)
    }
}else if(valor2 >= valor1 && valor2 >= valor3){
    if(valor1 >= valor3){
        alert(`${valor3}, ${valor1}, ${valor2}`)
    }else{
        alert(`${valor1}, ${valor3}, ${valor2}`)
    }
}else if(valor3 >= valor1 && valor3 >= valor2){
    if(valor1 >= valor2){
        alert(`${valor2}, ${valor1}, ${valor3}`)
    }else{
        alert(`${valor1}, ${valor2}, ${valor3}`)
    }
}

window.location.href = "index.html"