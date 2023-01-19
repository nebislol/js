const pintarServicios = () => {
  const contenedor = document.getElementById("contenedorServicios");

  servicios.forEach(servicio => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.style = "width:17rem";

    div.innerHTML += `<img src="../img/${servicio.imagen}" class="card-img-top" alt="Imagen de un equipo administravitivo trabajando" >
                      <div class="card-body">
                          <h3 class="card-title">${servicio.titulo}</h3>
                          <p class="card-text">${servicio.descripcion}</p>
                          <a href="./servicios.html" class="botonS btn btn-dark">Mas informacion</a>
                          <a class="botonS btn btn-success material-icons agregar fas fa-shopping-cart"  id=${servicio.id} ></a>
                      </div>
                      `
    contenedor.appendChild(div);
  });
};

