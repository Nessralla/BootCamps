var opcEntrada = document.querySelector('input[name="opc"]:checked');
// let opcEntrada = document.getElementById('opc') as HTMLInputElement;
var avancar = document.getElementById('button');
if (avancar) {
    avancar.addEventListener('click', function () {
        console.log(opcEntrada);
    });
}
// console.log(opcEntrada);
