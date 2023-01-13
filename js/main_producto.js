//funcion para renderizar la pagina de ver-producto.html
const renderProducto = () => {
    const producto = cargarProducto();
    let salida = `<div class="col-md-6 text-center">
            <img src="imagen/${producto.imagen}" alt="${producto.nombre}" class="img-fluid" title="${producto.nombre}" />
        </div>
        <div class="col-md-6 comprar-producto  d-flex flex-column justify-content-center align-items-center">
            <h1 class="fw-bold mb-5">${producto.nombre}</h1>
            <p class ="px-5 my-4">${producto.descripcion}</p>
            <p class ="fs-2 py-4"><b>$${producto.precio}</p>
            <p ><a href="#" class="btn btn-dark px-5 py-3 fs-5" onClick="agregarAlCarrito(${producto.id});" title="Agregar al Carrito">Agregar al carrito (+)</a></p>
        </div>`;

    document.getElementById("producto").innerHTML = salida;
}

renderProducto();
renderBotonCarrito();