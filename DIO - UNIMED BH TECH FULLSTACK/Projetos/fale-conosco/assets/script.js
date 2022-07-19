// let opcEntrada = document.getElementById('opc') as HTMLInputElement;
var avancar = document.getElementById('button');
if (avancar) {
    avancar.addEventListener('click', function () {
        var _a;
        var opcEntrada = (_a = document.querySelector('input[name="opc"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
        if (opcEntrada) {
            console.log(opcEntrada);
        }
    });
}
