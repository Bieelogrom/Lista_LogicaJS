var homem1 = parseInt(prompt("Digite a idade do primeiro homem: "))
var homem2 = parseInt(prompt("Digite a idade do segundo homem: "))
var mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "))
var mulher2 = parseInt(prompt("Digite a idade da segunda mulher: "))

if(homem1 >= homem2 && mulher1 >= mulher2){
    alert(`Homem mais velho: ${homem1} + mulher mais nova: ${mulher2} = ${homem1 + mulher2}\nHomem mais novo: ${homem2} X mulher mais velha: ${mulher1} = ${homem2 * mulher1}`)
}else{
    alert(`Homem mais velho: ${homem2} + mulher mais nova: ${mulher1} = ${homem2 + mulher1}\nHomem mais novo: ${homem1} X mulher mais velha: ${mulher2} = ${homem1 * mulher2}`)
}

window.location.href = "index.html"