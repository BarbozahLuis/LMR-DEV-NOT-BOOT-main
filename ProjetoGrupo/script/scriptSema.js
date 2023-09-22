// Neste código, estamos armazenando variáveis que serão usadas posteriormente no CSS.
const img = document.getElementById('img'); // Obtém a referência da imagem do semáforo.
const buttons = document.getElementById('buttons'); // Obtém a referência dos botões de controle.
let colorIndex = 0; // Variável que controla o índice da cor atual no semáforo.
let intervalId = null; // Variável para armazenar o identificador do intervalo de tempo para a troca automática de cores.

// A função "trafficLight" é acionada quando um botão é clicado e interrompe a troca automática de cores.
const trafficLight = (event) => {
    stopAutomatic(); // Chama a função para interromper a troca automática de cores.
    turnOn[event.target.id](); // Liga a cor do semáforo correspondente ao botão clicado.
}

// A função "nextIndex" atualiza o índice da cor do semáforo para a próxima cor.
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

// A função "changeColor" seleciona a próxima cor do semáforo e a exibe.
const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color](); // Liga a cor do semáforo.
    nextIndex(); // Atualiza o índice da próxima cor.
}

// A função "stopAutomatic" interrompe a troca automática de cores do semáforo, se estiver em andamento.
const stopAutomatic = () => {
    clearInterval(intervalId); // Interrompe o intervalo de tempo.
}

// O objeto "turnOn" mapeia as cores do semáforo para funções que ligam a cor correspondente.
const turnOn = {
    'red': () => img.src = './img/vermelho.png', // Ligar a cor vermelha.
    'yellow': () => img.src = './img/amarelo.png', // Ligar a cor amarela.
    'green': () => img.src = './img/verde.png', // Ligar a cor verde.
    'automatic': () => intervalId = setInterval(changeColor, 1000) // Iniciar troca automática de cores.
}

// Adiciona um evento de clique aos botões para acionar a função "trafficLight" quando um botão for clicado.
buttons.addEventListener('click', trafficLight);
