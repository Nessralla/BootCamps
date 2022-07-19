var valor = 0;
var campo = document.getElementById('cont');
var botaoAumentar = document.getElementById('mais');
var botaoDiminuir = document.getElementById('menos');
function aumentar() {
    if (valor <= 9) {
        valor++;
        campo.innerHTML = valor.toString();
    }
    if (0 < valor) {
        campo.style.color = "black";
    }
    console.log(valor);
}
function diminuir() {
    if (valor >= -9) {
        valor--;
        campo.innerHTML = valor.toString();
    }
    if (0 > valor) {
        campo.style.color = "red";
    }
}
if (botaoAumentar) {
    botaoAumentar.addEventListener('click', function () {
        console.log(valor);
        aumentar();
    });
}
if (botaoDiminuir) {
    botaoDiminuir.addEventListener('click', function () {
        console.log(valor);
        diminuir();
    });
}
