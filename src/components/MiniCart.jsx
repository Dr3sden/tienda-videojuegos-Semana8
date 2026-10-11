import { useEffect, useState } from 'react'

function MiniCart({ carrito, onCerrar, onEliminar, onVaciar, total, contarProductos }) {
    const [comprado, setComprado] = useState(false);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onCerrar();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onCerrar]);

    const handleComprar = () => {
        if (carrito.length === 0) return;
        setComprado(true);
        setTimeout(() => {
            setComprado(false);
            onVaciar();
            onCerrar();
        }, 3000);
    };

    return (
        <>
            {/* Overlay */}
            <div
                className="offcanvas-backdrop fade show"
                onClick={onCerrar}
                style={{ zIndex: 1040 }}
            ></div>

            {/* Offcanvas */}
            <div
                className="offcanvas offcanvas-end show"
                tabIndex="-1"
                style={{ visibility: 'visible', zIndex: 1045, maxWidth: '420px' }}
            >
                <div className="offcanvas-header bg-dark text-white border-bottom border-warning border-3">
                    <h5 className="offcanvas-title fw-bold text-warning">
                        🛒 Tu Carrito ({contarProductos})
                    </h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={onCerrar}
                        aria-label="Cerrar"
                    ></button>
                </div>

                <div className="offcanvas-body d-flex flex-column p-0">
                    {carrito.length === 0 ? (
                        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 p-4 text-muted">
                            <p className="fs-5 mb-3">😢 Tu carrito está vacío</p>
                            <button className="btn btn-outline-dark" onClick={onCerrar}>
                                Seguir comprando
                            </button>
                        </div>
                    ) : (
                        <>
                            <ul className="list-group list-group-flush flex-grow-1 overflow-auto">
                                {carrito.map(producto => (
                                    <li key={producto.id} className="list-group-item d-flex align-items-center gap-2">
                                        <img
                                            src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                                            alt={producto.nombre}
                                            className="rounded"
                                            style={{ width: '55px', height: '55px', objectFit: 'cover' }}
                                        />
                                        <div className="flex-grow-1 min-width-0">
                                            <h6 className="mb-1 small fw-bold text-truncate">{producto.nombre}</h6>
                                            <small className="text-muted">
                                                ${producto.precioOferta.toLocaleString('es-CL')} x {producto.cantidad}
                                            </small>
                                        </div>
                                        <button
                                            className="btn btn-sm text-danger"
                                            onClick={() => onEliminar(producto.id)}
                                            aria-label={`Eliminar ${producto.nombre}`}
                                        >
                                            <i className="bi bi-x-lg"></i>
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="border-top bg-light p-3">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="fw-bold">Total:</span>
                                    <strong className="fs-4 text-warning-emphasis">
                                        ${total.toLocaleString('es-CL')}
                                    </strong>
                                </div>

                                <button
                                    className={`btn w-100 fw-bold mb-2 ${comprado ? 'btn-success' : 'btn-warning'}`}
                                    onClick={handleComprar}
                                    disabled={comprado}
                                >
                                    {comprado ? (
                                        <><i className="bi bi-check-circle me-1"></i> ¡Comprado!</>
                                    ) : (
                                        <><i className="bi bi-credit-card me-1"></i> Comprar ahora</>
                                    )}
                                </button>

                                {comprado && (
                                    <div className="alert alert-success mb-2 py-2 small text-center">
                                        🎉 ¡Gracias por tu compra! Total: ${total.toLocaleString('es-CL')}
                                    </div>
                                )}

                                {!comprado && (
                                    <button className="btn btn-outline-dark w-100" onClick={onCerrar}>
                                        Seguir comprando
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default MiniCart;