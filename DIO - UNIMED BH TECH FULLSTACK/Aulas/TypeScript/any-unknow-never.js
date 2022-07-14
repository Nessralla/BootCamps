var anyEstaDeVolta; // Any pode ser igual a qualquer outro tipo
var unknownValor; // Unknow difere do Any pois para alocar seu valor a outro objeto precisa de uma verificação, é uma boa prática
unknownValor = 3;
unknownValor = 'Alexandre';
unknownValor = true;
unknownValor = 'vai sim';
var stringTeste = 'Agora vai';
// stringTeste = unknownValor; Da erro 
if (typeof unknownValor === 'string') {
    stringTeste = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo }; // funciona como um break com return
}
// tipo never = nunca termina
jogaErro('deu erro', 500);
