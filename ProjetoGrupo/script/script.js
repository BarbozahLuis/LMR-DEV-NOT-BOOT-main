const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');
//reproduz o som da nota que esta armazenada na pasta note
const playNote = (note) => {
    const audio = new Audio(`notes/${note}.wav`);
    audio.play();
}
//abaixo criamos uma função para que quando clicarmos com o botão do mouse na tecla, ela muda de cor para para o background #ddd
const handleMouseDown = (key) => {
    //ação para quando clicar reproduzir as notas referente a cada tecla
    playNote(key.getAttribute('data-note'));
//criar um if para identificar qual é a tecla preta e qual a tecla branca
    if (key.className.includes('black')) {
        key.classList.add('black--pressed'); //classe criada no css para quando clicar na tecla preta, ela mudar de cor, para reduzir o codigo no script
        return;
    }
//muda a cor da tecla branca quando pressionado
    key.style.background = '#ddd';
}
//quando solta ou para de clicar o som para e a tecla volta a sua cor npadrão
const handleMouseUp = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');// remover a ação da classe criada no css
        return;
    }

    key.style.background = 'white';
}
//executa a função de clique do mouse, para que reproduza o som e mude a cor da tecla quando pressionada e quando para de pressionar
keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
});
//criar ação do checkbox para quando clicar no "mostrar teclas" irá mostras as teclas q podem ser utilizadas para nao precisar clicar com apenas o mouse 
checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
});
//criar a mesma função do mouse só que para tocar com o nosso teclado abnt2
const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "q": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "w": () => handleMouseDown(keys[4]),
    "e": () => handleMouseDown(keys[5]),
    "4": () => handleMouseDown(keys[6]),
    "r": () => handleMouseDown(keys[7]),
    "5": () => handleMouseDown(keys[8]),
    "t": () => handleMouseDown(keys[9]),
    "6": () => handleMouseDown(keys[10]),
    "y": () => handleMouseDown(keys[11]),
    "u": () => handleMouseDown(keys[12]),
    "8": () => handleMouseDown(keys[13]),
    "i": () => handleMouseDown(keys[14]),
    "9": () => handleMouseDown(keys[15]),
    "o": () => handleMouseDown(keys[16]),
    "p": () => handleMouseDown(keys[17]),
    "-": () => handleMouseDown(keys[18]),
    "[": () => handleMouseDown(keys[19]),
    "=": () => handleMouseDown(keys[20]),
    "]": () => handleMouseDown(keys[21]),
    "Backspace": () => handleMouseDown(keys[22]),
    "\\": () => handleMouseDown(keys[23]),
}
// quando parar de clicar a tecla voltará para a cor padrão e irá parar de emitir som
const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "q": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "w": () => handleMouseUp(keys[4]),
    "e": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "r": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "t": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "y": () => handleMouseUp(keys[11]),
    "u": () => handleMouseUp(keys[12]),
    "8": () => handleMouseUp(keys[13]),
    "i": () => handleMouseUp(keys[14]),
    "9": () => handleMouseUp(keys[15]),
    "o": () => handleMouseUp(keys[16]),
    "p": () => handleMouseUp(keys[17]),
    "-": () => handleMouseUp(keys[18]),
    "[": () => handleMouseUp(keys[19]),
    "=": () => handleMouseUp(keys[20]),
    "]": () => handleMouseUp(keys[21]),
    "Backspace": () => handleMouseUp(keys[22]),
    "\\": () => handleMouseUp(keys[23]),
}
//ação criada para quando pressionar a tecla
document.addEventListener('keydown', (event) => {
    event.preventDefault();//preventDefault, nao deixa executar comportamento padrão das teclas "tab" por exemplo
    keyDownMapper[event.key]()
});
//ação criada para quando para
document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
});
