const carritoOculto = document.getElementById('verCarrito');
const abrirCarrito = document.getElementById('cesta-carrito');
const botonCerrar = document.getElementById('botonCerrar');
const EliminarServicio = document.getElementById('modal-carrito');



abrirCarrito.addEventListener('click', () => {
    carritoOculto.classList.toggle('invisible')
});

botonCerrar.addEventListener('click', () => {
    carritoOculto.classList.toggle('invisible')
});

EliminarServicio.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminarServicio')) {
        eliminarServicioEnCarrito(e.target.value);
    }
    
})