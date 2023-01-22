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
        servicio = servicios.find(servicios => servicios.id == servicioId);
        carrito.push(servicio);
        alertaServicioAgregado();
        pintarServicioCarrito(servicio);
        guardarCarritoStorage(carrito);


    } else {
        alertaServicioRepetido();
    }
};


const alertaServicioAgregado = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Servicio Agregado Correctamente',
        showConfirmButton: false,
        timer: 1000
    })
};

const alertaServicioRepetido = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'El Servicio ya se encuentra en el carrito',
        showConfirmButton: false,
        timer: 1500
    })
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
        <p>${servicio.titulo}</p>
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
            <p>${servicio.titulo}</p>
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




//capturar informacion del formulario
const formulario = document.querySelector('#forms');

formulario.addEventListener('submit', () =>{
    event.preventDefault();

    let capturarNombre =document.querySelector('#formularioNombre').value;
    let capturaremail =document.querySelector('#formularioEmail').value;
    if(capturaremail.length == 0) {
        alertaCompletaFormulario();
        return;}
    let capturartelefono =document.querySelector('#formularioTelefono').value;
    let capturarmensaje =document.querySelector('#formularioMensaje').value;

    class Clientes {
        constructor(nombre, email, telefono, mensaje) {
            this.nombre = nombre;
            this.email = email;
            this.telefono = telefono;
            this.mensaje = mensaje;
        }
    };
    
    cliente1 = new Clientes( capturarNombre, capturaremail,capturartelefono, capturarmensaje);
    
    agregar(capturaremail);    
    
});

const alertaCompletaFormulario = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'El formulario esta vacio debes completar almenos el email',
        showConfirmButton: false,
        timer: 1500
    })
};

let baseClientes = [];
const agregar = (capturaremail) =>{
    const clienteRepetido = baseClientes.find(baseClientes => baseClientes.email == capturaremail);
    if (!clienteRepetido) {
        const nuevoCliente = baseClientes.find(baseClientes => baseClientes.email == capturaremail);
        baseClientes.push(cliente1);
        alertaServicioAgregado();
        pedidoPresupuesto();
        

        
    } else {
        alertaServicioRepetido();
    }
    
};


//Unificar servicios agregados al carrito con datos ingresados en el formulario
const pedidoPresupuesto = () => {
    const pedidoPresupuestoRecibido = [...carrito, ...baseClientes]
    console.log(pedidoPresupuestoRecibido);
};


