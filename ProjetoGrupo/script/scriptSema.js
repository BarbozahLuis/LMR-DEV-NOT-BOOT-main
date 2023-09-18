// aqui basicamente nesse codigos estamos armazenando variaveis para pode utilizar elas depois no css
const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}


// Basicamente, esses códigos fazem com que um elemento na página mude de cor em um 
//ciclo predefinido sempre que a função changeColor é chamada.
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;
/* a const next index e color index são responsaveis por definir a proxima cor do semáforo
A função "changeColor" seleciona a cor correspondente 
ao valor atual de "colorIndex" e chama a função correspondente para ligar a cor do semáforo.
Em seguida, chama a função "nextIndex" para definir a próxima cor. */

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
// Aqui é para deixar o semaforo automatico
const stopAutomatic = () => {/*A função "stopAutomatic" interrompe a troca automática de cores do semáforo, 
                             utilizando o identificador do intervalo de tempo armazenado em "intervalId". */
    clearInterval(intervalId);
}

/* a variavel turnOn é um objeto que mapeia as cores do semáforo para Funções que ligam a cor 
correspondente no semáforo */
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);/*  aqui adicionei um addEventListener para que me 
permita quando eu clicar nos botões ele faça a troca de cor do semáforo ou coloque ele em automático*/
