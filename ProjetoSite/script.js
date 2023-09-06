function preencher(){//criar variavel para puxar os input de digitação, nome, endereço, email, conf email, senha e conf senha
    var nome = document.getElementById('pNome').value;
    var endereco = document.getElementById('pEndereco').value;
    var email = document.getElementById('pEmail').value;
    var email2 = document.getElementById('pEmail2').value;
    var senha = document.getElementById('pSenha').value;
    var senha2 = document.getElementById('pSenha2').value;

    //se o espaço nome estiver vazio, imprima um alerta
    if(nome==""){
        alert("Digite seu Nome")
    }
    // se o endereço estiver vazio, imprima um alerta
    if(endereco==""){
        alert("Digite seu Endereço")
    }
    //se o email estiver vazio imprima um alerta
    if(email==""){
        alert("Digite seu E-mail")
    }
    //se o email um nao for igual ao email dois imprima um alerta de divergencia
    if(email==email2){
    }else{
        alert("Email divergente")
    }
    //se a senha estiver vazia imprima um alerta
    if(senha==""){
        alert("Digite a senha")
    }
    //se a senha não for igual a senha dois imprima um alerta de divergencia
    if(senha==senha2){
    }else{
        alert("Senha divergente")
    }
}