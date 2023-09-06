function mostrarNome(){
    var Nome = document.getElementById('pNome').value;
    var Sobrenome = document.getElementById('pSobrenome').value;
    var NomeCompleto = Nome + ' ' + Sobrenome;
    alert('Olá' + NomeCompleto);
}
let valor1;
let valor2;
let resultado;
function somar(){
    valor1 = document.getElementById("pValor1").value;
    valor2 = document.getElementById("pValor2").value;
    resultado = parseInt(valor1)+parseInt(valor2);
    
    if(valor1==""||valor2==""){
        resultado = alert("Digite dois valores para efetuar a função");
     }
     else{
        alert("O resultado da soma é"+resultado);

     }
}

function sub(){
    valor1 = document.getElementById("pValor1").value;
    valor2 = document.getElementById("pValor2").value;
    resultado = parseInt(valor1)-parseInt(valor2);
    
    if(valor1==""||valor2==""){
        resultado = alert("Digite dois valores para efetuar a função");
     }
     else{
        alert("O resultado da subtração é"+resultado);

     }
}

function mult(){
    valor1 = document.getElementById("pValor1").value;
    valor2 = document.getElementById("pValor2").value;
    resultado = parseInt(valor1)*parseInt(valor2);
    
    if(valor1==""||valor2==""){
        resultado = alert("Digite dois valores para efetuar a função");
     }
     else{
        alert("O resultado da multiplicação é"+resultado);

     }
}

function div(){
    valor1 = document.getElementById("pValor1").value;
    valor2 = document.getElementById("pValor2").value;
    resultado = parseInt(valor1)/parseInt(valor2);
    
    if(valor1==""||valor2==""){
        resultado = alert("Digite dois valores para efetuar a função");
     }else if(valor1==0||valor2==0){
        alert("Não dividiras")
     }
     else{
        alert("O resultado da divisão é"+resultado);

     }
}