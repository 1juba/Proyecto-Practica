const contenedorTarjetas = document.getElementById("productos-container");

/** Creamos las tarjetas de productos teniendo en cuenta la lista de cervezas.js */
function crearTarjetasProductosInicio(productos){
  contenedorTarjetas.innerHTML = '';
  productos.forEach(producto => {
    const nuevaCerveza = document.createElement("div");
    nuevaCerveza.classList = "tarjeta-producto"
    nuevaCerveza.category  = producto.category
    nuevaCerveza.innerHTML = `
    <img src="${producto.imagen}">
    <h3>${producto.titulo}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaCerveza);
    nuevaCerveza.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}



// Filtramos los productos por categoría
function filtrarProductosPorCategoria(categoria) {
  const tarjetasProductos = document.querySelectorAll(".tarjeta-producto");
  tarjetasProductos.forEach(tarjeta => {
    if (tarjeta.category === categoria) {
      tarjeta.style.display = "block";
    } else {
      tarjeta.style.display = "none";
    }
  });
}

// Lista completa de cervezas y creamos las tarjetas de productos iniciales
getCervezas().then(cervezas => {
  crearTarjetasProductosInicio(cervezas);

  // Agregamos eventos de click a botones de filtro (por ejemplo, categoría "Carnes")
  document.getElementById("carnes").addEventListener("click", () => {
    filtrarProductosPorCategoria("Carnes");
  });

  document.getElementById("pastas").addEventListener("click", () => {
    filtrarProductosPorCategoria("Pastas");
  });

  document.getElementById("pizzas").addEventListener("click", () => {
    filtrarProductosPorCategoria("Pizzas");
  });

  document.getElementById("empanadas").addEventListener("click", () => {
    filtrarProductosPorCategoria("Empanadas");
  });

  document.getElementById("tartas").addEventListener("click", () => {
    filtrarProductosPorCategoria("Tartas");
  });

  document.getElementById("confiteria").addEventListener("click", () => {
    filtrarProductosPorCategoria("Confiteria");
  });

  document.getElementById("bebidas").addEventListener("click", () => {
    filtrarProductosPorCategoria("Bebidas");
  });

  document.getElementById("promos").addEventListener("click", () => {
    filtrarProductosPorCategoria("Promos");
  });

  // Agregar evento de clic al botón "Todos"
  document.getElementById("todos").addEventListener("click", () => {
    mostrarTodosLosProductos(cervezas);
  });
  
  
});

// Función para mostrar todos los productos sin filtro
function mostrarTodosLosProductos(cervezas) {
  // Llama a la función para crear tarjetas de productos con la lista completa de cervezas
  crearTarjetasProductosInicio(cervezas);
}
