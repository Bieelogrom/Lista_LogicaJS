var cod_usuario;
var acesso = null

while(acesso != true){
    cod_usuario = parseInt(prompt("Digite seu código de usuário: "))
    if(cod_usuario == 1234){
        var senha = parseInt(prompt("Digite a senha: "))

        if(senha == 9999){
            alert("Acesso permitido!")
            acesso = true
        }else{
            alert("Senha incorreta!")
            acesso = false
        }
    }else{
        alert("Usuário inválido!")
        acesso = false
    }
}

window.location.href = "index.html"
