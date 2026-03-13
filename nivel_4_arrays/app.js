// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
 { nombre: "Arroz con pollo", precio: 12, stock: 5 },
 { nombre: "Lomo saltado", precio: 18, stock: 3 },
 { nombre: "Sopa", precio: 8, stock: 10 },
 { nombre: "Causa rellena", precio: 20, stock:1},
 { nombre: "Cuy chactado" , precio:30, stock:7}
];
function contarPlatos(){
return menu.length;
}
// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
 let totalPlatos = contarPlatos();
  const output = document.getElementById("output");
 output.innerHTML = ""; 

 let html = "<ul>";

 for (let i = 0; i < menu.length; i++) {
   const plato = menu[i];
   html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
 }

 html += "</ul>";
 html+= `Hay un total de ${totalPlatos} platos`
 output.innerHTML = html;
}

// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {
 const nuevoPlato = { nombre: "Pollo a la olla", precio: 19, stock: 6 };
 const duplicado = menu.some(p => 
    p.nombre.toLowerCase() === nuevoPlato.nombre.toLowerCase()
  );

  if (duplicado) {
    renderLista("Aviso", ["Ese plato ya está en el menú"]);
    return false;
  }

 menu.push(nuevoPlato);
 return true
}


function buscarPlatoPorNombre(nombre){
 const plato = menu.find(p =>
  p.nombre.toLowerCase() === nombre.toLowerCase());
  if (!plato){
    renderLista("Resultado de busqueda es:", ["texto no encontrado"]);
    return;
  }
 
  const texto = `${plato.nombre} - S/${plato.precio} - stock: ${plato.stock}`;
  renderLista("Resultado de la busqueda", [texto]);
}
  
function filtrarStockBajo(){
  const platosfiltrados = menu.filter(p => p.stock <= 3);
 
  if (platosfiltrados.length === 0 ){
   renderLista("stock bajo", ["no hay platos con stock bajo"])
  return;
  }
  const listaDeTextos = platosfiltrados.map(p =>
    `${p.nombre} - stock: ${p.stock}`
   );
   renderLista("stock bajo", listaDeTextos);
}

function obtenerResumenMenu(){
const resumen = menu.map(p =>
  `${p.nombre} - S/ ${p.precio}`
)
renderLista("resumen del menu", resumen);

}
function renderLista(titulo, listaDeTextos){
  const output = document.getElementById("output");
  let html =  `<h3> ${titulo}</h3><ul>`;
  for(let i = 0; i < listaDeTextos.length; i++) {
        html += `<li>${listaDeTextos[i]}</li>`;
  }
 html += "</ul>";
 output.innerHTML = html;
}

function venderPlato(nombre, cantidad){
 const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
if (!plato) {
 renderLista("Aviso", ["Plato no encontrado"]);
return;
}
if (plato.stock < cantidad) {
 renderLista("Aviso", [`Stock insuficiente. El stock actual de ${plato.nombre}: ${plato.stock}`]);
 return;
}
plato.stock-= cantidad;
renderLista("Venta exitosa", [`Se vendieron ${cantidad} x ${plato.nombre}. Stock restante: ${plato.stock}`]);
renderMenu();
}



// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
 renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
 const duplicado = agregarPlatoDemo();
 if (duplicado) renderMenu();
});
 document.getElementById("btnBuscar").addEventListener("click", () => {
    const valor = document.getElementById("inputBuscar").value;
    buscarPlatoPorNombre(valor);
});

document.getElementById("btnStockBajo").addEventListener("click", () => {
    filtrarStockBajo();
});

document.getElementById("btnResumen").addEventListener("click", () => {
    obtenerResumenMenu();
});

document.getElementById("btnVender").addEventListener("click", () => {
  const nombre = document.getElementById("inputVenderNombre").value;
  const cantidad = Number(document.getElementById("inputVenderCantidad").value);
  venderPlato(nombre, cantidad);

});
