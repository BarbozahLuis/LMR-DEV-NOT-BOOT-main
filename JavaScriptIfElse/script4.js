let operacao;
let numero1, numero2;

operacao=prompt("Digite a Operação desejada","+, -, *, /")
numero1=prompt("Digite um Nº")
numero2=prompt("Digite outro Nº")

switch(operacao){
    case("+"): document.write(parseInt(numero1)+parseInt(numero2));
    break;
    case("-"): document.write(parseInt(numero1)-parseInt(numero2));
    break
    case("*"): document.write(parseInt(numero1)*parseInt(numero2));
    break;
    case("/"):
    if(numero2==0){
        document.write("não dividirás por Zero")
    }else{
        document.write(parseInt(numero1)*parseInt(numero2));
    }
    break;
    default: document.write("Escolha uma opreção valida")
}