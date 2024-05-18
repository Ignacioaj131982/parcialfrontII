/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let identificarNombre = document.getElementById("nombre");
  let identificarEdad = document.getElementById("edad");
  let identificarCiudad = document.getElementById("ciudad");
  let interesaJs = document.getElementById("javascript");

  let obtenerNombre = prompt(`Por favor ingrese su nombre`);
  datosPersona.nombre = obtenerNombre;
  identificarNombre.textContent = obtenerNombre;

  let obtenerEdad = parseInt(prompt("Ingresa el año que naciste"));
  let anioactual = new Date().getFullYear();
  datosPersona.edad = anioactual - obtenerEdad;
  identificarEdad.textContent = datosPersona.edad;

  let obtenerCiudad = prompt(`Ingresa la ciudad donde vives`);
  datosPersona.ciudad = obtenerCiudad;
  identificarCiudad.textContent = obtenerCiudad;

  let obtenerPreferenciaJs = confirm(`Te interesa JS?`);
  if (obtenerPreferenciaJs) {
    datosPersona.interesPorJs = "Si";
    interesaJs.textContent = `Si`;
  } else {
    datosPersona.interesPorJs = "No";
    interesaJs.textContent = `No`;
  }
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let identificarNombre = document.getElementById("nombre");
  let identificarEdad = document.getElementById("edad");
  let identificarCiudad = document.getElementById("ciudad");
  let interesaJs = document.getElementById("javascript");

  identificarNombre.textContent = datosPersona.nombre;
  identificarEdad.textContent = datosPersona.edad;
  identificarCiudad.textContent = datosPersona.ciudad;
  interesaJs.textContent = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let fila = document.getElementById(`fila`);

  listado.forEach(item => {
    let crearDivCaja1 = document.createElement(`div`);
  crearDivCaja1.className = `caja`;

  let imagenCaja = document.createElement(`img`);
  imagenCaja.src = item.imgUrl;
  imagenCaja.alt = item.lenguajes;

  let parrafoDeTexto = document.createElement(`p`);
  parrafoDeTexto.className = `lenguajes`;
  parrafoDeTexto.textContent = item.lenguajes;
  let parrafoDeTexto2 = document.createElement(`p`);
  parrafoDeTexto2.className = `bimestre`;
  parrafoDeTexto2.textContent = item.bimestre;

  crearDivCaja1.appendChild(imagenCaja);
  crearDivCaja1.appendChild(parrafoDeTexto);
  crearDivCaja1.appendChild(parrafoDeTexto2);
  fila.appendChild(crearDivCaja1);

  });
  
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

