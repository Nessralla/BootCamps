/*
DOM (Document Object Model)

UPPER CASE SNAKE CASE = SOME_VARIABLE => Usado para nomear constantes
CAMEL CASE = someVariable => Muito usadado

var => declaração de variável global
let => declaração de variável local do block (dentro do if, ou for etc)

hoisting = atribuir valor a variável antes de declarar ela
redeclaração = somente com var, let não permite

*/
numberOne = 1;

console.log(numberOne+2);

var numberOne;


var firstName = 'Joao';
let lastName = 'Souza';

if (firstName === 'Joao') {
    firstName = 'Pedro';
    let lastName = 'Silva';
}

console.log(firstName, lastName); // Output = Pedro Souza

// Constante é declarada em SNAKE_UPPER_CASE tem escopo de bloco e não faz hoisting, não pode redeclarar nem reatribuir;

const FIRST_NAME = 'Alexandre';

// Javascript tem tipagem dinâmica

// Tipos primitivos (numbers, strings, boolean, null e undefined)
// Tipos não-primitivos (arrays, objects)

// STRINGS

// Strings são objetos (letra maiúscula) - string é primitivo

let nome = 'Alexandre'
let sobrenome = 'Nessralla'

console.log(nome[1]) 
console.log(nome.length)

concatenado = nome + ' ' + sobrenome
console.log(concatenado)

concatenado = nome + '\n' + sobrenome
console.log(concatenado)

concatenado = `${nome} ${sobrenome}`
console.log(concatenado)

// \ é escape igual python

console.log(concatenado.split(" "))

console.log(concatenado.includes('Alexandre'))

console.log(concatenado.replace('Nessralla','Ramalho'))


//NUMBERS 

let num = 100

console.log(num + 10)


var lista = [1,2,3,4,5,6,7,8,9,10];

function numero(items) {
    if (items % 2 === 0) {
        console.log(items);
    }
}

console.log("ola");

lista.forEach(numero); // a funcao forEach itera sobre os elementos de um array

// push(item) - adiciona um item no final do array
// pop() - remove item no final do array
// shift() - remove item do inicio do array
// unshift(item) - adiciona item no inicio do array
// indexof(item) - retorna o indice do intem
// splice(start,end) - remove itens do start ao end 
// slice(start,end) - retorna uma parte da array ja existence 

// Objetos
function tomarCafe(){
    console.log("vai tomar cafe fdp")
}


var xicara = {
    cor:'azul',
    tamanho:'p',
    funcao : tomarCafe(),
        
}

// OBJECTS

// objetc.value(objeto) = retorna os valores
// object.keys(objeto) = retorna as keys

// EMPTY. ex: nome=''; , lista=[];

// NULL: nome = null; lista = null;

// undefined: foi declarada mas não foi inicializada

/*
if (condicao) {

} else if (condicao) {

} else {

}

IF TERNARIO

[condicao] ? (statement if true) : (statemente if false)

SWITCH CASE (equivale a uma comparaçao === tipo e valor)

switch ($(expressao)) {
    case 1:
        codigo
        break
    case 2:
        ...
    case 3:
        ...
    default:
        se não der nenhum case
}

FOR
for (let i = 0; i < 5; i++) {
    executa este código 5 vezes
}

FOR-in
for (i in array) {
    console.log(i) mostrar todos as propriedades de um objeto um a um
}

for-of
for (i of array) {
    mostra os valores da array
}

while (condicao){
    executa codigo
}

do {
    executa;
} while (condicao)

THIS (refere-se ao objeto pai)
declarada sozinha = objeto global (em navegadores, window)
funcao = objeto global
no evento html = elemento referido ex: button





FUNCOES


Declaração Padrão
var funcoes = function(){
    console.log("deu certo");
}

FUNÇÃO ANÔNIMA
const soma = function (a,b) {
    return a + b;
}
soma(1,2) resultado é 3


FUNÇÃO autoinvocável (IIFE)
(function(){
    let name = 'hehehe';
    return name;
}
)(); fica entre parênteses

Callbacks = função passada como argumento para outra função.

tem valor padrão de parâmetro, exemplo soma( a=1, b=1)

Objeto arguments pode ser usado para fazer operações com todos os argumentos passados numa função

Passar arrays como parâmetros: usar Spread, exemplo: console.log(soma(...numeros));

Transformar elementos em uma array para parâmetro: usar rest function(...args);

Object Destructing: filtrar dados num objeto. function userId{id}


arrow function (não faz hoisting)
var funcao = () => {
    console.log('Sou uma arrow function!');
}
    - metodos do THIS não funciona
    - não exist objeto arguments
    - o construtor new não pode ser utilizado

funcao(0;)

*/