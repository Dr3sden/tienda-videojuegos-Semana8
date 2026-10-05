function ProductCard({ producto, enCarrito, onAgregar, onVerDetalle }) {
    const descuento = Math.round(
        ((producto.precioNormal - producto.precioOferta) / producto.precioNormal) * 100
    );

    const rutaImagen = `${import.meta.env.BASE_URL}${producto.imagen}`;

    return (
        <article className="producto-card">
            <div className="producto-imagen">
                <img
                    src={rutaImagen}
                    alt={producto.nombre}
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x220/1e1e2f/ffc107?text=' + encodeURIComponent(producto.nombre);
                    }}
                />
                {descuento > 0 && (
                    <span className="descuento-badge">-{descuento}%</span>
                )}
                <span className="categoria-badge">{producto.categoria}</span>
            </div>

            <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p className="producto-descripcion">{producto.descripcionCorta}</p>

                <div className="producto-plataformas">
                    {producto.plataformas.map(plat => (
                        <span key={plat} className="plataforma-badge">{plat}</span>
                    ))}
                </div>

                <div className="producto-precios">
                    <span className="precio-normal">
                        ${producto.precioNormal.toLocaleString('es-CL')}
                    </span>
                    <span className="precio-oferta">
                        ${producto.precioOferta.toLocaleString('es-CL')}
                    </span>
                </div>

                <div className="producto-acciones">
                    <button className="btn-detalle" onClick={() => onVerDetalle(producto)}>
                        👁️ Ver detalle
                    </button>
                    <button
                        className={`btn-agregar ${enCarrito ? 'en-carrito' : ''}`}
                        onClick={() => onAgregar(producto)}
                        disabled={enCarrito}
                    >
                        {enCarrito ? '✓ En carrito' : '🛒 Agregar'}
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;