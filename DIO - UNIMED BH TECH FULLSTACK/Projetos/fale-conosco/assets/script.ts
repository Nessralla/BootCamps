

// let opcEntrada = document.getElementById('opc') as HTMLInputElement;
let avancar = document.getElementById('button');


if (avancar){
    avancar.addEventListener('click',() => {

        var opcEntrada = document.querySelector<HTMLInputElement>('input[name="opc"]:checked')?.value;

        
        if (opcEntrada) {
            console.log(opcEntrada);
        }
    })
}
