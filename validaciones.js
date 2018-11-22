$(function() {
    $("#guardar").on('click', function() {

        $("#formulario").validate({
            rules: {
                paterno: { required: true, minlength: 2, maxlength: 50 },
                materno: { required: true, minlength: 2, maxlength: 50 },
                nombre: { required: true, minlength: 2, maxlength: 50 },
                nota1: { required: true, number: true },
                nota2: { required: true, number: true },
                nota3: { required: true, number: true },
                nota4: { required: true, number: true }
            },
            massages: {
                paterno: { required: 'Ingrese su apellido', minlength: 'el minimo permito son 2 carácteres', maxlength: 'el maximopermitido son 50 carácteres' },
                materno: { required: 'Ingrese su apellido', minlength: 'el minimo permito son 2 carácteres', maxlength: 'el maximopermitido son 50 carácteres' },
                nombre: { required: 'Ingrese su nombre', minlength: 'el minimo permito son 2 carácteres', maxlength: 'el maximopermitido son 50 carácteres' },
                nota1: { required: 'Ingrese nota', minlength: 'el minimo permito son 1', maxlength: 'el maximopermitido son 50 carácteres' },
                nota2: { required: 'Ingrese nota', minlength: 'el minimo permito son 1 ', maxlength: 'el maximopermitido son 50 carácteres' },
                nota3: { required: 'Ingrese nota', minlength: 'el minimo permito son 1 carácteres', maxlength: 'el maximopermitido son 50 carácteres' },
                nota4: { required: 'Ingrese nota', minlength: 'el minimo permito son 1 carácteres', maxlength: 'el maximopermitido son 50 carácteres' }
            }

        });

    });

});