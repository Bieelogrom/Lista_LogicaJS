var nome = prompt("Digite seu nome: ")
var altura = parseFloat(prompt("Digite sua altura: "))
var sexo = prompt("Digite seu sexo: \nM para Masculino e F para Feminino")
var peso_ideal;


while (sexo != "M" || sexo != "F") {
switch (sexo) {
        case "M":
            peso_ideal = (72.7 * altura) - 58
            alert(peso_ideal)
            window.location.href = "index.html"
        case "F":
            peso_ideal = (62.1 * altura) - 44.7
            alert(peso_ideal)
            window.location.href = "index.html"
        default:
            alert("Opção não identificada!")
            sexo = prompt("Digite seu sexo: \nM para Masculino e F para Feminino")
    }
}







