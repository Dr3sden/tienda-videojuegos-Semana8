function ProductCard({ producto, enCarrito, onAgregar, onVerDetalle }) {
    const descuento = Math.round(
        ((producto.precioNormal - producto.precioOferta) / producto.precioNormal) * 100
    );

    const rutaImagen = `${import.meta.env.BASE_URL}${producto.imagen}`;

    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="card h-100 border-0 shadow-sm card-producto">
                <div className="position-relative overflow-hidden rounded-top">
                    <img
                        src={rutaImagen}
                        alt={producto.nombre}
                        loading="lazy"
                        className="card-img-top producto-img"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x220/1e1e2f/ffc107?text=' + encodeURIComponent(producto.nombre);
                        }}
                    />
                    {descuento > 0 && (
                        <span className="position-absolute top-0 end-0 m-2 badge bg-danger">
                            -{descuento}%
                        </span>
                    )}
                    <span className="position-absolute top-0 start-0 m-2 badge bg-dark text-warning text-uppercase">
                        {producto.categoria}
                    </span>
                </div>

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{producto.nombre}</h5>
                    <p className="card-text text-muted small flex-grow-1">
                        {producto.descripcionCorta}
                    </p>

                    <div className="d-flex flex-wrap gap-1 mb-2">
                        {producto.plataformas.map(plat => (
                            <span key={plat} className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle">
                                {plat}
                            </span>
                        ))}
                    </div>

                    <div className="d-flex align-items-baseline gap-2 mb-3">
                        <span className="text-decoration-line-through text-muted small">
                            ${producto.precioNormal.toLocaleString('es-CL')}
                        </span>
                        <span className="fs-5 fw-bold text-warning-emphasis">
                            ${producto.precioOferta.toLocaleString('es-CL')}
                        </span>
                    </div>

                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-outline-dark btn-sm flex-fill fw-bold"
                            onClick={() => onVerDetalle(producto)}
                        >
                            <i className="bi bi-eye me-1"></i> Detalle
                        </button>
                        <button
                            className={`btn btn-sm flex-fill fw-bold ${enCarrito ? 'btn-success' : 'btn-warning'}`}
                            onClick={() => onAgregar(producto)}
                            disabled={enCarrito}
                        >
                            {enCarrito ? (
                                <><i className="bi bi-check-lg me-1"></i> En carrito</>
                            ) : (
                                <><i className="bi bi-cart-plus me-1"></i> Agregar</>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;