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

export {};

let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase:string){
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}

let devePrintar = true;
let frase = 'O valor é: ';

if (button){
    button.addEventListener('click',() => {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value),Number(input2.value), devePrintar, frase));
        }
    })
}