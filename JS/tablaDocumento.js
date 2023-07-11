//agregar a la tabla
function addTablaDocu() {
    const listadoDocumentos = localStorage.getItem("Documentos");
    // console.log(listadoDocumentos);
    if (listadoDocumentos !== null) {
      const jsonData = JSON.parse(listadoDocumentos);
      const tableBody = document.getElementById("bodyDocumentos");
      for (let j of jsonData) {
        // console.log("informacion del for", j);
        // Nodo tr
        let row = document.createElement("tr");
        // Nodos td
        let cel0 = document.createElement("td");
        let cel1 = document.createElement("td");
        let cel2 = document.createElement("td");
        let cel3 = document.createElement("td");
        let cel4 = document.createElement("td");
        let cel5 = document.createElement("td");
  
        // Nodos de texto
        let texto0 = document.createTextNode(j.id);
        let texto1 = document.createTextNode(j.titulo);
        let texto2 = document.createTextNode(j.tematica);
        let texto3 = document.createTextNode(j.tipo);
        let texto4 = document.createTextNode(j.autor);
        let texto5 = document.createTextNode(j.fecha);
        let texto6 = document.createTextNode("Eliminar");
        let texto7 = document.createTextNode("Editar");
  
        // Nodo para el botón eliminar
        let eliminar = document.createElement("btn-delete");
        eliminar.style.backgroundColor = "red";
        eliminar.style.color = "white";
        eliminar.style.border = "none";
        eliminar.style.padding = "2px 6px";
        eliminar.style.cursor = "pointer";
        eliminar.style.borderRadius = "4px";
  
        let algo = "eliminar" + j.id;
        eliminar.setAttribute("id", algo);
        eliminar.setAttribute("onclick", "eliminarDocumento(" + j.id + ")");
  
        // Nodo para el botón editar
        let editar = document.createElement("btn-edit");
        editar.style.backgroundColor = "blue";
        editar.style.color = "white";
        editar.style.border = "none";
        editar.style.padding = "2px 6px";
        editar.style.cursor = "pointer";
        editar.style.borderRadius = "4px";
        editar.style.margin = "10px";
  
        let edt = "editar" + j.id;
        editar.setAttribute("id", edt);
        editar.setAttribute("onclick", "editarDocumento(" + j.id + ")");
        // console.log(j.id);
  
        // Árbol de nodos DOM
        cel0.appendChild(texto0);
        cel1.appendChild(texto1);
        cel2.appendChild(texto2);
        cel3.appendChild(texto3);
        cel4.appendChild(texto4);
        cel5.appendChild(texto5);
        cel6.appendChild(editar);
        cel6.appendChild(eliminar);
  
        eliminar.appendChild(texto7);
        editar.appendChild(texto8);
  
        row.appendChild(cel0);
        row.appendChild(cel1);
        row.appendChild(cel2);
        row.appendChild(cel3);
        row.appendChild(cel4);
        row.appendChild(cel5);
  
        tableBody.appendChild(row);
      }
    } else {
      alert("NO HAY DATOS PARA MOSTRAR");
    }
  }
  function traerDatos() {
    listadoDocumentos = localStorage.getItem("documentos");
    if (listadoDocumentos !== null) {
      documentos = JSON.parse(listadoDocumentos);
      return documentos;
    }
  }
  
  function eliminarDocumento(id) {
    traerDatos();
    // console.log("documento a eliminar ", id);
    const nuevoListado = documentos.filter(function (item) {
      return item.id !== id;
    });
    localStorage.removeItem("documentos");
    const jsonNuevo = JSON.stringify(nuevoListado);
    localStorage.setItem("documentos", jsonNuevo);
  
    // Obtiene la referencia al elemento padre de la tabla
    const tablaDocumentos = document.getElementById("bodydocumentos");
  
    // Elimina los nodos hijos de la tabla
    while (tablaDocumentos.firstChild) {
      tablaDocumentos.removeChild(tablaDocumentos.firstChild);
    }
  
    // Vuelve a cargar la tabla con los nuevos datos
    this.addTablaDocu();
  }
  
  // function editarDocumento(id){
   // window.location.href= `documento-editar.html?id=${id}`;
    // console.log("id pasado", id)
  
  
  
  