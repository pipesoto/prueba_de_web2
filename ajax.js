// console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {
    // console.log('dentro de la funcion');





    const xhttp = new XMLHttpRequest();




    xhttp.open('GET', 'notas.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // console.log(this.responseText);

            let datos = JSON.parse(this.responseText);

            // console.log(datos);

            let res = document.querySelector('#resp');
            res.innerHTML = '';


            for (let item of datos) {
                // console.log(item);
                let nota1 = item.nota1;
                let nota2 = item.nota2;
                let nota3 = item.nota3;
                let nota4 = item.nota4;


                let prom = (nota1 + nota2 + nota3 + nota4) / 4;
                let promedio = prom.toPrecision(2);
                let aprobado;

                if (promedio > 5.5) {

                    aprobado = "aprobado";


                } else if (promedio >= 3.5 && promedio <= 5.5) {
                    aprobado = "pendiente";
                } else {
                    aprobado = "reprobado";
                }
                res.innerHTML += `
                    <tr>
                    <td>${item.paterno}</td>
                    <td>${item.materno}</td>
                    <td>${item.nombre}</td>
                    <td>${item.nota1}</td>
                    <td>${item.nota2}</td>
                    <td>${item.nota3}</td>
                    <td>${item.nota4}</td>
                    <td>${promedio}</td>
                    <td>${aprobado}</td>
                    </tr>
                    `



                // console.log(promedio);




            }


        }



    }

}