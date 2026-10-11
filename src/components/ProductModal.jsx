import { useEffect } from 'react'

function ProductModal({ producto, onCerrar, onAgregar }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onCerrar();
        };
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onCerrar]);

    const descuento = Math.round(
        ((producto.precioNormal - producto.precioOferta) / producto.precioNormal) * 100
    );

    return (
        <>
            {/* Overlay oscuro */}
            <div
                className="modal-backdrop fade show"
                onClick={onCerrar}
                style={{ zIndex: 1050 }}
            ></div>

            {/* Modal */}
            <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
                style={{ zIndex: 1055 }}
                onClick={onCerrar}
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title fw-bold">
                                <i className="bi bi-info-circle me-2"></i>
                                {producto.nombre}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onCerrar}
                                aria-label="Cerrar"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <div className="row g-4">
                                <div className="col-md-5">
                                    <div className="position-relative">
                                        <img
                                            src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                                            alt={producto.nombre}
                                            className="img-fluid rounded shadow-sm w-100"
                                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x500/1e1e2f/ffc107?text=' + encodeURIComponent(producto.nombre);
                                            }}
                                        />
                                        {descuento > 0 && (
                                            <span className="position-absolute top-0 end-0 m-2 badge bg-danger">
                                                -{descuento}%
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-7">
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge bg-warning text-dark">
                                            {producto.categoria}
                                        </span>
                                        {producto.plataformas.map(plat => (
                                            <span key={plat} className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle">
                                                {plat}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-muted" style={{ textAlign: 'justify' }}>
                                        {producto.descripcionLarga}
                                    </p>

                                    <hr />

                                    <div className="d-flex align-items-baseline gap-3 mb-4">
                                        <span className="text-decoration-line-through text-muted">
                                            ${producto.precioNormal.toLocaleString('es-CL')}
                                        </span>
                                        <span className="fs-3 fw-bold text-warning-emphasis">
                                            ${producto.precioOferta.toLocaleString('es-CL')}
                                        </span>
                                    </div>

                                    <button
                                        className="btn btn-warning w-100 fw-bold py-2"
                                        onClick={() => {
                                            onAgregar(producto);
                                            onCerrar();
                                        }}
                                    >
                                        <i className="bi bi-cart-plus me-2"></i>
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductModal;