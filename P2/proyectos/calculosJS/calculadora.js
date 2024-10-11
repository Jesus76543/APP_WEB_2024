function operaciones() {
    let n1,n2,tipoope,respuesta;
     n1 = parseInt(document.getElementById("n1").value);
     n2 = parseInt(document.getElementById("n2").value);
     tipoope = document.getElementById("operaciones").value;
    if (isNumber(n1) && isNumber(n2)) {
        let ope;
        switch(tipoope) {
            case "+": ope = n1 + n2; break;
            case "-": ope = n1 - n2; break;
            case "*": ope = n1 * n2; break;
            case "/": ope = n1 / n2; break;
            default: ope = "Operación no válida"; break;
        }
        let respuesta = document.getElementById("resultado");
        respuesta.innerHTML = `<h3>${n1} ${tipoope} ${n2} = ${ope}</h3>`;
    } else {
        //let respuesta = document.getElementById("resultado");
        //respuesta.innerHTML = `<h3>Ingresa solo números</h3>`;
        alert("Ingresa solo numeros porfavor")
    }
}

function isNumber(value) {
    return !isNaN(value) && isFinite(value);
}
