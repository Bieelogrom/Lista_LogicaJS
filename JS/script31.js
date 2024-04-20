var A = parseFloat(prompt("Digite o valor de A: "))
var B = parseFloat(prompt("Digite o valor de B: "))
var C = parseFloat(prompt("Digite o valor de C: "))

if(A < (B+C) && B < (A+C) && C < (B+A)){
    alert("Forma um triângulo!")
}else{
    alert("Não forma uma triângulo!")
}

window.location.href = "index.html"