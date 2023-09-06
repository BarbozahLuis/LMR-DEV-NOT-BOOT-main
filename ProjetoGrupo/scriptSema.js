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

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
// Aqui é para deixar o semaforo automatico
const stopAutomatic = () => {
    clearInterval(intervalId);
}

// aqui ele está dando a função para poder trocar as cores do semaforo
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);