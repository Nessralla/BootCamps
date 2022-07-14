export{};

type input = number | string //É possível criar tipos que combinam tipos

function somarValores(input1: input ,input2: input){
    if (typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2
    }
    
}

console.log(somarValores('ola',2));
console.log(somarValores(2,3));
console.log(somarValores('oi','tudo bem?'));
console.log(somarValores(4,'é o numero'));

// definindo tipos de retorno numa função ": após a parametrização"

function somarValoresNumericos (numero1: number, numero2: number): number{
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1,3))

// Tipo void em funções (funções que não retornam nada)

function printaValoresNumericos(numero1: number, numero2:number):void {
    console.log(numero1 + numero2)
}

printaValoresNumericos(1,2);

// Callback em funções

function somarMaisValores (numero1: number, numero2: number, callback: (numero: number) => number): number{
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado (numero: number):number {
    return numero*numero
}

function dividirPorEleMesmo (numero: number): number {
    return numero/numero
}

console.log(somarMaisValores(1,3,aoQuadrado));
console.log(somarMaisValores(1,3,dividirPorEleMesmo))