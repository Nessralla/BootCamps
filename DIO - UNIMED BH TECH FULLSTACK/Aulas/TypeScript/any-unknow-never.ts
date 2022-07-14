let anyEstaDeVolta: any; // Any pode ser igual a qualquer outro tipo

let unknownValor: unknown; // Unknow difere do Any pois para alocar seu valor a outro objeto precisa de uma verificação, é uma boa prática

unknownValor = 3;
unknownValor = 'Alexandre';
unknownValor = true;
unknownValor = 'vai sim'

let stringTeste: string = 'Agora vai';

// stringTeste = unknownValor; Da erro 

if (typeof unknownValor === 'string') {
    stringTeste = unknownValor;
}

function jogaErro(erro: string, codigo: number){ // não é tipo void
    throw{error: erro, code: codigo} // funciona como um break com return
}

// tipo never = nunca termina

jogaErro('deu erro',500)