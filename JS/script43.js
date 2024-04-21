var A = parseInt(prompt("Digite o valor de A: "))
var B = parseInt(prompt("Digite o valor de B: "))
var C = parseInt(prompt("Digite o valor de C: "))

if((A < B+C) && (B < A+C) && (C < A+B)){
    if(A == B && B == C){
        alert("Triângulo Equilatero")
    }else if(A == B || B == C || A == C){
        alert("Triângulo Isósceles")
    }else{
        alert("Triângulo Escaleno")
    }
}else{
    alert("Não é possível formar um triângulo.")
}

window.location.href = "index.html"