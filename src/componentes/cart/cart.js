let carrito = [];

const servicioContenedor = document.getElementById('contenedorServicios');

servicioContenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarServicioEnCarrito(e.target.id)
    }
});

//Validar cantidad de servicios
const validarServicioEnCarrito = (servicioId) => {
    const servicioRepetido = carrito.find(servicios => servicios.id == servicioId);
    if (!servicioRepetido) {
        const servicio = servicios.find(servicios => servicios.id == servicioId);
        carrito.push(servicio);
        // //mostrar cantidad se servicios en el carrito
        // const cantidadServicios = document.getElementById('contador-carrito');
        // cantidadServicios.innerText = carrito.length
        pintarServicioCarrito(servicio);
        guardarCarritoStorage(carrito);
    } else {
            alert("El servicio ya fue agregado al carrito");
    }
};


const cantidadServiciosContador = (carrito) => {
    const cantidadServicios = document.getElementById('contador-carrito');
    cantidadServicios.innerText = carrito.length
};

        


const pintarServicioCarrito = (servicio) => {
    cantidadServiciosContador(carrito);
    
    const contenedor = document.getElementById('modal-carrito');
    const div = document.createElement('div');
    div.classList.add('servicioEnCarrito');
    div.innerHTML =`
        <p>Servicio a contratar: ${servicio.titulo}</p>
        <button class="btn waves-effect waves-ligth boton-eliminarServicio" value="${servicio.id}">X</button>
    `
    contenedor.appendChild(div);
    
};

//eliminar servicio del carrito
const eliminarServicioEnCarrito = (servicioId) => {
    const servicioIndex = carrito.findIndex(servicios => servicios.id == servicioId);
    carrito.splice(servicioIndex, 1);
    actualizarCarrito(carrito);
};

const actualizarCarrito = (carrito) => {
    cantidadServiciosContador(carrito);
    const contenedor = document.getElementById('modal-carrito');

    contenedor.innerHTML = '';

    carrito.forEach(servicio => {
        const div = document.createElement('div');
        div.classList.add('servicioEnCarrito');
        div.innerHTML =`
            <p>Servicio a contratar: ${servicio.titulo}</p>
            <button class="btn waves-effect waves-ligth boton-eliminarServicio" value="${servicio.id}">X</button>
        `
        contenedor.appendChild(div);
    });
    guardarCarritoStorage(carrito);
};



const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};