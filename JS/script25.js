var numero_da_conta = parseFloat(prompt("Digite o número da sua conta: "))
var saldo = parseFloat(prompt("Digite o saldo da sua conta: "))
var debito = parseFloat(prompt("Digite quanto você tem em débito: "))
var credito = parseFloat(prompt("Digite quanto você tem em crédito: "))
var saldo_atual = saldo - debito + credito

alert(`Você tem ${saldo_atual} atualmente.`)

var verificar = (saldo_atual >= 0) ? "Saldo positivo!" : "Saldo negativo!"
alert(verificar)

window.location.href = "index.html"