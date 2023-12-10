// Eventos del DOM
precioSpan = document.querySelector(".precio-inicial");
totalValue = document.querySelector(".valor-total");
cantidadElemento = document.getElementById("cantidad");

//Variables
var precio = 400000;
var total = 0;

precioSpan.innerHTML = precio;
totalValue.innerHTML = total;

// Funciones 
function sumarCantidad() {
    let cantidadActual = parseInt(cantidadElemento.innerHTML);
    let nuevaCantidad = cantidadActual + 1;
    cantidadElemento.innerHTML = nuevaCantidad;
    let nuevoPrecio = precio * nuevaCantidad;
    totalValue.innerHTML = nuevaCantidad > 0 ? nuevoPrecio : totalValue.innerHTML;
}

function restarCantidad() {
    let cantidadActual = parseInt(cantidadElemento.innerHTML);
    let nuevaCantidad = cantidadActual > 0 ? cantidadActual - 1 : cantidadActual;
    cantidadElemento.innerHTML = nuevaCantidad;
    let nuevoPrecio = precio * nuevaCantidad;
    totalValue.innerHTML = nuevaCantidad >= 0 ? nuevoPrecio : totalValue.innerHTML;
    if (nuevaCantidad < 0) {
        alert("No se puede poner un número menor a 0");
    }
}

// Eventos



