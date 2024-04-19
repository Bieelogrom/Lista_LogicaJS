var val1 = parseInt(prompt("Digite o primeiro valor: "));
var val2 = parseInt(prompt("Digite o segundo valor: "));

if(val1 > val2){
    alert(`${val1} é maior que ${val2}`);
}else if(val2 > val1){
    alert(`${val2} é maior que ${val1}`);
}else{
    alert(`Valores iguais`);
}

window.location.href = "index.html"