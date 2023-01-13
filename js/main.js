//funcion para renderizar los productos en el index.html
const renderProductos = () => {
    const productos = cargarProductosLS();
    let salida = "";

    for (let producto of productos) {
        salida += `<div class="col-md-3 mb-5">
            <a href="#" onClick="verProducto(${producto.id});" class="text-decoration-none text-dark" title="Ver ${producto.nombre}">
                <div class="card text-center border border-0">
                    <img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                    </div>
                </div>
            </a>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();

