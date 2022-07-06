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


// Trocar os elementos pares por 0
//  Se array vazio retorna avisando
