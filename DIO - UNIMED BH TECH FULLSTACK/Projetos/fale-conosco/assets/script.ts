
let opcEntrada = document.querySelector('input[name="opc"]:checked');
// let opcEntrada = document.getElementById('opc') as HTMLInputElement;
let avancar = document.getElementById('button');

if (avancar){
    avancar.addEventListener('click',() => {
        if (opcEntrada) {
            console.log(opcEntrada);
        }
    })
}

// console.log(opcEntrada);