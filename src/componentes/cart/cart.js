let carrito = [];

const productoContenedor = document.getElementById('contenedorServicios');

productoContenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarProductoEnCarrito(e.target.id)
    }
});

const validarProductoEnCarrito = (productoId) => {
    alert("Holitas chip"+productoId);
};
