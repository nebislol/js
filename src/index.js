document.addEventListener('DOMContentLoaded', () => {
    pintarServicios();

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
        actualizarCarrito(carrito);
        cantidadServiciosContador(carrito);
    }
    
});