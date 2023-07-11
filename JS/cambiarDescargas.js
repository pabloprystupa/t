const apiUrl = "http://127.0.0.1:5500/HTML/descargas.html"; // Se cambia luego por la de PythonAnywhere

function obtenerDocumentos(materia) {
    fetch(`${apiUrl}${materia}`)
        .then(response => response.json())
        .then(data => mostrarDocumentos(data))
        .catch(error => console.log(error));
}

function mostrarDocumentos(documentos) {
    const listaDocumentos = document.getElementById('lista-documentos');
    listaDocumentos.innerHTML = '';

    documentos.forEach(documento => {
        const itemDocumento = document.createElement('li');
        itemDocumento.innerHTML = `
            <span>${documento.titulo}</span>
            <button onclick="descargarDocumento(${documento.codigo})">Descargar</button>
            <span>Descargas: ${documento.descargas}</span>
        `;
        listaDocumentos.appendChild(itemDocumento);
    });
}

function descargarDocumento(codigoDocumento) {
    fetch(`${apiUrl}${codigoDocumento}`, { method: 'PUT' })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
