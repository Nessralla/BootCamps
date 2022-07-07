// Crie um contador, um botão '-' para diminuir a contagem e um botão '+' para aumentar
//  Ele deve ser limitado de -10 a 10, se for <1 a cor deve ser vermelha
var valor = 0;


function mais(){
    if (valor <= 9){
        valor ++;
        document.getElementById('cont').innerHTML = valor;
    }
    if (0 < valor){
        document.getElementById('cont').style.color = "black";
    }
}

function menos(){
    if (valor >= -9){
        valor --;
        document.getElementById('cont').innerHTML = valor;
    }
    if (0 > valor){
        document.getElementById('cont').style.color = "red";
    }
}

// Crie uma TO-DO List


// Palíndromo
//  Receber uma string e verificar se é um palíndromo
let words = ['ana', 'natan','omo','alexandre','natal'];
var pal = 0;
for (i in words){
    for (var j = 0; j < words[i].length ; j++){
        //console.log(words[i][j] + ',' + words[i][words[i].length-j-1]);
        if (words[i][j] == words[i][words[i].length-j-1]){

            continue;
        } else {
            console.log(words[i], 'não é um palíndromo');
            pal = 1;
            break;
        }
    }
    if (pal != 1){
        console.log(words[i], 'é um palíndromo');
        pal = 0;
    }

}


// Trocar os elementos pares por 0
//  Se array vazio retorna avisando

let numeros = [1,2,3,4,5,6,7,8,9,10]
for (i in numeros){
    if (numeros[i] % 2 == 0){
        numeros[i] = 0;
    }
}

console.log(numeros)

// Exercícios funções JAVASCRIPT

// Dada uma lista de alunos e notas, faça uma função que receba a lista e a media, mostrando os aprovados
let alunos = [{nome: 'Joao', nota: 7},{nome: 'Pedro', nota: 8},{nome: 'Paulo', nota: 4}]
let alunosAprovados = []
function notas (arr,media){
    for (i of arr){
        if (i.nota >= media){
            alunosAprovados.push(i.nome);
        }
    }
}

notas(alunos,7);
console.log(alunosAprovados);

// Dada a funcao calcula idade, utilize os metodos this para modificar 

function calculaIdade(anos){
    return `Daqui a ${anos} anos. ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
}

const pessoa2 = {
    nome: "Carla",
    idade: 25,
}

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: 'Pug'
}

console.log(calculaIdade.call(animal,20));

console.log(calculaIdade.apply(pessoa1,[10]));
