export{};

let valorAny: any; // É um tipo que pode receber qualquer valor, ignora a tipagem
valorAny = 3;
valorAny = 'Ola';
valorAny = true;

let valorString:string = 'teste';

valorString = valorAny; // Funciona pois o any pode ser qualquer tipo objeto

let valorString2 = 'textao'
valorString2 = valorAny; // É uma má prática


function somarString(string1:string, string2:string) {
    console.log(string1+string2)
}

somarString(valorString,valorString2)