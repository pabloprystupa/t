const primero='<div class="clase1"><a href="Enconstruccion.html"><img src="../imagenes/física-e1534938838719.jpg" alt="pizarra con formulas de física" width="95%" height="82%" title="Física"><span>Física</span></a></div>        <div><a href="Enconstruccion.html"><img src="../imagenes/Matematicas.png" alt="pizarra con formulas matemática" width="95%"height="82%" title="Matemática"><span>Matemática</span></a></div>     <div><a href="Enconstruccion.html"><img src="../imagenes/Biología.jpg" alt="pizarra con formulas de física" width="95%" height="82%"        title="Biología"><span>Biología</span></a> </div><div> <a href="Enconstruccion.html"><img src="../imagenes/quimica.jpg"alt="ampolla con contenido y un esquema de estructura molecular de la sustancia" width="95%"height="82%" title="Química"><span>Química</span></a></div><div><a href="Enconstruccion.html"><img src="../imagenes/geografia.jpg" alt="Mapa y una brújula" width="95%"        height="82%" title="Geografía"><span>Geografía</span></a></div>    <div><a href="Enconstruccion.html"><img src="../imagenes/historia1.jpg" alt="Libros antiguos y una lupa" width="95%" height="82%"       title="Historia"><span>Historia</span></a> </div> <div><a href="Enconstruccion.html"><img src="../imagenes/Filosofia.jpg" alt="Bustos de filosofos" width="95%" height="82%"        title="Filosofía"><span>Filosofía</span></a></div> <div><a href="Enconstruccion.html"><img src="../imagenes/otras_disiplinas.jpg" alt="esquemas de sistintas diciplinas tecnológicas" width="95%" height="82%"    title="Otras Disiplinas"><span>Otras Disiplinas</span></a></div>'
const segundo='<div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/Bvfn6eUhUAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/yd1jx1DkXb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/PTrOSGYC6BU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/UF_yHrFP1Ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/vqGUvocEYAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1" style="display:flex; align-items:center; justify-content: center; "><a href="https://www.youtube.com/" target=_blank><span style="background-color: aquamarine;padding: 5px 5px; border-radius: 10px;" >Buscar Videos</span></a></div>'
const tercero='<div class="clase1"><button class="boton1" type="button" onclick="cambiaContenido(3)">Tutores/as de Física</button> </div><div class="clase1"><button class="boton1" type="button" onclick="cambiaContenido(3)">Tutores/as de Matemática</button></div><div class="clase1"><button class="boton1" type="button" onclick="cambiaContenido(3)" >Tutores/as de Biología</button></div><div class="clase1"><button class="boton1" type="button" onclick="cambiaContenido(3)">Tutores/as de Química</button></div><div class="clase1"><button class="boton1" type="button" onclick="cambiaContenido(3)">Tutores/as de Geografía</button> </div><div class="clase1"><button class="boton1" type="button" onclick="cambiaContenido(3)">Tutores/as de Historia </button></div><div class="clase1"><button class="boton1" type="button" onclick="cambiaContenido(3)" >Tutores/as de Filosofía</button></div><div class="clase1"><button class="boton1" type="button" onclick="cambiaContenido(3)">Otras Disiplinas</button></div>'
const cuarto='<div class="formu"><div class="contenedor-formulario"> <form id="formulario2">  <label for="titul">Título del documento:</label>    <input size="30" type="text" name="titulo"id="titul" ><label for= "tema">Temática del documento:</label> <select name="tematica" id="tema"> <option>Biología</option> <option>Filosofía</option> <option>Física</option> <option>Geografía</option> <option>Historia</option> <option>Química</option> <option>Matemática</option> <option>Otra</option> </select> <label for="tip">Tipo de documento:</label> <select name="tipo" id="tip">  <option>Ensayo</option> <option>Monografía</option> <option>Trabajo Práctico</option> <option>Ejercicios resueltos</option> <option>Informe</option> <option>Otro</option> </select> <label for="Archivo">Archivo:</label> <input style= "background-color:white; border-radius: 0px;" type="file" name="Archivo" id="Archivo">    <label for="descrip">Descripción del contenido:</label>   <textarea name="descrip" id="descrip" cols="40" rows="3"></textarea></fieldset> <input class="botones" type="reset" value="Borrar formulario"> <input  class="botones" type="submit" value="Subir Documento"> </form> </div> </div>'

const URL = "http://127.0.0.1:5000/" // Esta es la dirección del es el servidor de flask


document.getElementById('formulario2').addEventListener('submit', function (event) {
    event.preventDefault(); 
    var titulo = document.getElementById('titul').value;
    var tematica = document.getElementById('tema').value;
    var tipo= document.getElementById('tip').value;
    var descripcion = document.getElementById('descrip').value;

    
    var documento = {
        titulo: titulo,
        tematica: tematica,
        tipo:tipo,
        descripcion: descripcion
    };
    console.log(documento)
    
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
                throw new Error('Error al agregar el documento');
            }
        })
        .then(function (data) {
            alert('Docuemnto agregado correctamente.');
            document.getElementById('titul').value = "";
            document.getElementById('tema').value = "";
            document.getElementById('tip').value = "";
            document.getElementById('descrip').value = "";
        })
        .catch(function (error) {
           
            alert('Error al agregar el documento.');
        });
}) 


function traerDatosAPI() {
    
    for (var i=1;i<=9;i++){
    fetch('https://randomuser.me/api') // API a leer
        // Cuando ha finalizado la lectura
        // guardo en datos el texto leido:
        .then(datos => datos.json()) //res va a guardar el dato mediante el método .json()
            .then(datos => {
            // Y luego copio ese texto en #contenido.
            var actual=document.querySelector("#mostrado");
            var botonTres=document.querySelector("#botonTres");
            
            if (botonTres.className==="cambiaBorde" && actual.className!="contenidoUno"){
            actual.innerHTML +=
                `<div class="tarjeta">
                 <img src = "${datos.results[0].picture.large}"</img><br>
                 Nombre: ${datos.results[0].name.last}, ${datos.results[0].name.first}<br>
                 Contacto:${datos.results[0].email}</div>`}
        })
}}
function cambiaContenido(ene){
const actual=document.querySelector("#mostrado");
const botonUno=document.querySelector("#botonUno");
const botonDos=document.querySelector("#botonDos");
const botonTres=document.querySelector("#botonTres");
const botonCuatro=document.querySelector("#botonCuatro");

if (ene===1){
    
actual.innerHTML=primero
actual.className="contenidoUno"
botonUno.className="cambiaBorde"
botonDos.className="boton"
botonTres.className="boton"
botonCuatro.className="boton"}

else {
     if (ene===2){
        
    actual.innerHTML=segundo
    actual.className="contenidoDos"
    botonUno.className="boton"
    botonDos.className="cambiaBorde"
    botonTres.className="boton"
    botonCuatro.className="boton"} 
    else{
        if (ene===3){
            actual.innerHTML=''
            traerDatosAPI()
    actual.className="contenidoTres"}
    else{
        if (ene==4){
            
            actual.innerHTML=tercero
            actual.className="contenidoUno"
            botonUno.className="boton"
            botonDos.className="boton"
            botonTres.className="cambiaBorde"
            botonCuatro.className="boton"
        }
        else{
           
    actual.innerHTML=cuarto
    actual.className="contenidoCuatro"
    botonUno.className="boton"
    botonDos.className="boton"
    botonTres.className="boton"
    botonCuatro.className="cambiaBorde"}
    }
    }   
}}

