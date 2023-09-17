PIANO

Este código é responsável por criar uma funcionalidade de um piano virtual. 

Primeiro, o código seleciona todos os elementos com a classe "key", o elemento com a classe "checkbox__keys", o elemento com a classe "switcher" e o elemento com a classe "piano__keys". 

A função "playNote" é responsável por reproduzir o som da nota correspondente ao parâmetro "note". Ela cria um novo elemento de áudio e reproduz o arquivo de áudio correspondente à nota.

As funções "handleMouseDown" e "handleMouseUp" são responsáveis por tratar os eventos de clique do mouse nas teclas do piano. A função "handleMouseDown" reproduz o som da nota e adiciona uma classe "black--pressed" ou altera o background da tecla para indicar que ela está pressionada. A função "handleMouseUp" remove a classe "black--pressed" ou restaura o background da tecla quando o clique do mouse é solto.

Em seguida, o código adiciona os event listeners para os eventos de clique do mouse nas teclas do piano, utilizando as funções "handleMouseDown" e "handleMouseUp".

O código também adiciona um event listener para o evento "change" no elemento checkbox. Quando o checkbox é marcado, é adicionada a classe "switcher--active" ao elemento switcher e é removida a classe "disabled-keys" do elemento keysSection. Quando o checkbox é desmarcado, é removida a classe "switcher--active" do elemento switcher e é adicionada a classe "disabled-keys" ao elemento keysSection.

As variáveis "keyDownMapper" e "keyUpMapper" são objetos que mapeiam as teclas do teclado para as funções "handleMouseDown" e "handleMouseUp" respectivamente. Quando uma tecla do teclado é pressionada, a função correspondente é chamada.

Por fim, o código adiciona event listeners para os eventos "keydown" e "keyup" no documento. Quando uma tecla do teclado é pressionada, a função correspondente é chamada.


SEMAFORO

Este código possui a funcionalidade de controlar um semáforo de trânsito.

Primeiro, o código seleciona o elemento de imagem com o id "img" e o elemento de botões com o id "buttons". Também são criadas duas variáveis, "colorIndex" e "intervalId", para armazenar o índice da cor atual do semáforo e o identificador do intervalo de tempo para a troca automática de cores.

A função "trafficLight" é responsável por controlar o semáforo. Ela para a troca automática de cores, chamando a função "stopAutomatic", e chama a função correspondente à cor do botão clicado.

As funções "nextIndex" e "changeColor" são responsáveis por definir a próxima cor do semáforo. A função "nextIndex" incrementa o valor de "colorIndex" e, quando chega ao valor 2, retorna ao valor 0. A função "changeColor" seleciona a cor correspondente ao valor atual de "colorIndex" e chama a função correspondente para ligar a cor do semáforo. Em seguida, chama a função "nextIndex" para definir a próxima cor.

A função "stopAutomatic" interrompe a troca automática de cores do semáforo, utilizando o identificador do intervalo de tempo armazenado em "intervalId".

A variável "turnOn" é um objeto que mapeia as cores do semáforo para funções que ligam a cor correspondente no semáforo. Quando uma cor é selecionada, a função correspondente é chamada e a imagem do semáforo é alterada.


CALCULADORA

Este código possui várias funcionalidades para uma calculadora. 

A função "dis(val)" é responsável por adicionar o valor passado como parâmetro ao campo de resultado.

A função "myFunction(event)" é responsável por adicionar o valor da tecla pressionada ao campo de resultado. Ela verifica se a tecla pressionada é um número ou um dos operadores matemáticos (+, -, *, /) e adiciona ao valor atual do campo de resultado.

A variável "cal" representa o elemento HTML com o id "calcu". A função atribuída a "cal.onkeyup" é responsável por verificar se a tecla pressionada é a tecla Enter (código 13) e, se for, chama a função "solve()" para resolver a expressão matemática presente no campo de resultado.

A função "solve()" utiliza a biblioteca "math.evaluate" para avaliar a expressão matemática presente no campo de resultado e retorna o resultado. O resultado é então atribuído ao campo de resultado.

A função "clr()" é responsável por limpar o campo de resultado, atribuindo uma string vazia a ele.