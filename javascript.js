function guardar() {

    var pat = document.getElementById("paterno").value;
    var mat = document.getElementById("materno").value;
    var nom = document.getElementById("nombre").value;
    var n1 = document.getElementById("nota1").value;
    var n2 = document.getElementById("nota2").value;
    var n3 = document.getElementById("nota3").value;
    var n4 = document.getElementById("nota4").value;
    var promedio = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
    var prom = promedio.toPrecision(2);
    var estado = ""

    if (prom > 5.5) {
        estado = "Aprobado";
    } else if (prom < 3.5) {
        estado = "Reprobado";
    } else {
        estado = "pendiente"
    }

    var fila = "<tr><td>" + pat + "</td><td>" + mat + "</td><td>" + nom + "</td><td>" + n1 + "</td><td>" + n2 + "</td><td>" + n3 + "</td><td>" + n4 + "</td><td>" + prom + "</td><td>" + estado + "</td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("resp").appendChild(btn);
    limpiar();
}

function limpiar() {
    document.getElementById("pat").value = "";
    document.getElementById("mat").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";
    document.getElementById("n4").value = "";
}