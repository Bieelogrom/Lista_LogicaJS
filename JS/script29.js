var valor1 = parseInt(prompt("Digite o primeiro valor: "))
var valor2 = parseInt(prompt("Digite o segundo valor: "))
var valor3 = parseInt(prompt("Digite o terceiro valor: "))

if (valor1 >= valor2 || valor1 >= valor3) {
    if (valor2 >= valor3) {
        alert(`Os maiores valores são : ${valor1} e ${valor2}\n
        A soma entre eles é igual a : ${valor1 + valor2}\nMenor número : ${valor3}`)
    } else {
        alert(`Os maiores valores são : ${valor1} e ${valor3}\n
        A soma entre eles é igual a : ${valor1 + valor3}\nMenor número : ${valor2}`)
    }
} else if (valor2 >= valor1 || valor2 >= valor3) {
    if (valor1 >= valor3) {
        alert(`Os maiores valores são : ${valor2} e ${valor1}\n
        A soma entre eles é igual a : ${valor2 + valor1}\nMenor número : ${valor3}`)
    } else {
        alert(`Os maiores valores são : ${valor2} e ${valor3}\n
        A soma entre eles é igual a : ${valor2 + valor3}\nMenor número : ${valor1}`)
    }
} else if (valor3 >= valor1 || valor3 >= valor2) {
    if (valor2 >= valor1) {
        alert(`Os maiores valores são : ${valor3} e ${valor2}\n
        A soma entre eles é igual a : ${valor3 + valor2}\nMenor número : ${valor1}`)
    } else {
        alert(`Os maiores valores são : ${valor3} e ${valor1}\nA soma entre eles é igual a : ${valor3 + valor1}\nMenor número : ${valor2}`)
    }
}

window.location.href = "index.html"