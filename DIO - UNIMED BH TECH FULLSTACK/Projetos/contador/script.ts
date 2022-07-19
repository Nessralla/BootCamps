var valor = 0;
let campo = document.getElementById('cont')!;
let botaoAumentar = document.getElementById('mais');
let botaoDiminuir = document.getElementById('menos');


function aumentar(){
    if (valor <= 9){
        valor ++;
        campo.innerHTML = valor.toString();
    }
    if (0 < valor){
        campo.style.color = "black";
    }
    console.log(valor);
}

function diminuir(){
    if (valor >= -9){
        valor --;
        campo.innerHTML = valor.toString();
    }
    if (0 > valor){
        campo.style.color = "red";
    }
}


if (botaoAumentar){
    botaoAumentar.addEventListener('click',() => {
        console.log(valor);
        aumentar();
    })
}

if (botaoDiminuir){
    botaoDiminuir.addEventListener('click',() => {
        console.log(valor);
        diminuir();
    })
}
