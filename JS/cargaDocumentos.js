const URL = "http://127.0.0.1:5000/" // Esta es la dirección del es el servidor de flask
//const URL = "https://xxxxxxxx.pythonanywhere.com/"

// Capturamos el evento de envío del formulario

document.getElementById('formulario2').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitamos que se envie el form por ahora

    // Obtenemos los valores del formulario
    var titulo = document.getElementById('titul').value;
    var tematica = document.getElementById('tema').value;
    var tipo= document.getElementById('tip').value;
    var descripcion = document.getElementById('descrip').value;

    // Creamos un objeto con los datos del producto
    var documento = {
        titulo: titulo,
        tematica: tematica,
        tipo:tipo,
        descripcion: descripcion
    };
    console.log(documento)
    // Realizamos la solicitud POST al servidor
    fetch(URL + 'documentos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(documento)
    })
        .then(function (response) {
            // Código para manejar la respuesta
            if (response.ok) {
                return response.json(); // Parseamos la respuesta JSON
            } else {
                // Si hubo un error, lanzar explícitamente una excepción
                // para ser "catcheada" más adelante
                throw new Error('Error al agregar el documento');
            }
        })
        .then(function (data) {
            alert('Docuemnto agregado correctamente.');
            //Limpiamos el formulario.
            document.getElementById('titul').value = "";
            document.getElementById('tema').value = "";
            document.getElementById('tip').value = "";
            document.getElementById('descrip').value = "";
        })
        .catch(function (error) {
            // Código para manejar errores
            alert('Error al agregar el documento.');
        });
})