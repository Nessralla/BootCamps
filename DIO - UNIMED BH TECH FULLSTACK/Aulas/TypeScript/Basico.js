
/* Aprendizado sobre TypeScript

TypeScript é uma extensão do JavaScript !
    Adiciona features à linguagem original
    Compila para JS

Vantagens:
    - Definição estática de tipos:
        + Funcionalidades mais explícitas
        + Maior segurança durante o desenvolvimento
        + Detecta erros durante a compilação
    - Compila um JavaScript mais resiliente
    - Ajuda a desenvolver boas práticas de programação

    

*/

var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
var devePrintar = true;
var frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
