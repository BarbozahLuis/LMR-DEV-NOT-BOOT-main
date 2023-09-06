let HT; 
let VH;
let PD;
let TD;
let SB;
let SL;

HT = prompt('Digite as Horas Trabalhadas:', 'Informe aqui.');
VH = prompt('Entre com o valor da hora:','Informe aqui.');
PD = prompt('Informe o Percentual de desconto:','em porcentagem');
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB - TD;

document.write('Salário = ', SL);

