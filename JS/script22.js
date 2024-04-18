var horas_trabalhadas_no_mes = parseInt(prompt("Digite a quantidade de horas trabalhadas em um mês: "))
var salario_por_hora = parseFloat(prompt("Digite seu salário por hora trabalhada: "))
var salario_total = horas_trabalhadas_no_mes * salario_por_hora

var horas_normais_por_semana = 40
var horas_normais_por_mes = horas_normais_por_semana * 4

if (semana_trabalhada >= 160) {
    salario_total += salario_por_hora + ((50 / 100) * salario_por_hora)
    alert(`Funcionário passou das 40h semanais! \nSalário por hora : ${salario_por_hora}R$ \nHoras trabalhadas no mês : ${horas_trabalhadas_no_mes} \nSalário total do funcionário : ${salario_total}R$`)
}else{
    alert(`Funcionário não passou das 40h semanais! \nSalário por hora : ${salario_por_hora}R$ \nHoras trabalhadas no mês : ${horas_trabalhadas_no_mes} \nSalário total do funcionário : ${salario_total}R$`)
}