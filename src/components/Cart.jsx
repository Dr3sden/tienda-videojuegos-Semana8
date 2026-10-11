import { useState } from 'react'

function Cart({ carrito, onEliminar, onVaciar, total, contarProductos }) {
    const [comprado, setComprado] = useState(false);

    const handleComprar = () => {
        if (carrito.length === 0) return;
        setComprado(true);
        setTimeout(() => {
            setComprado(false);
            onVaciar();
        }, 3000);
    };

    if (carrito.length === 0) {
        return (
            <section className="card border-0 shadow-sm my-5" id="seccion-carrito">
                <div className="card-body p-4">
                    <h2 className="border-start border-5 border-warning ps-3 mb-4 fw-bold">
                        🛒 Carrito de Compras
                    </h2>
                    <div className="text-center text-muted py-5">
                        <p className="fs-4 mb-2">😢 Tu carrito está vacío</p>
                        <p className="small mb-0">Agrega productos para comenzar tu compra</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="card border-0 shadow-sm my-5" id="seccion-carrito">
            <div className="card-body p-4">
                <h2 className="border-start border-5 border-warning ps-3 mb-4 fw-bold">
                    🛒 Carrito de Compras
                </h2>

                <ul className="list-group list-group-flush mb-4">
                    {carrito.map(producto => (
                        <li key={producto.id} className="list-group-item d-flex flex-wrap align-items-center gap-3 px-0 py-3">
                            <img
                                src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                                alt={producto.nombre}
                                className="rounded"
                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            />
                            <div className="flex-grow-1">
                                <h6 className="mb-1 fw-bold">{producto.nombre}</h6>
                                <small className="text-muted">
                                    ${producto.precioOferta.toLocaleString('es-CL')} x {producto.cantidad}
                                </small>
                            </div>
                            <span className="fw-bold text-warning-emphasis">
                                ${(producto.precioOferta * producto.cantidad).toLocaleString('es-CL')}
                            </span>
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => onEliminar(producto.id)}
                                aria-label={`Eliminar ${producto.nombre}`}
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="text-end border-top pt-3">
                    <p className="mb-2">
                        Total de productos: <strong>{contarProductos}</strong>
                    </p>
                    <p className="fs-4 mb-3">
                        Total: <strong className="text-warning-emphasis">
                            ${total.toLocaleString('es-CL')}
                        </strong>
                    </p>

                    <div className="d-flex flex-wrap gap-2 justify-content-end">
                        <button className="btn btn-outline-danger fw-bold" onClick={onVaciar}>
                            <i className="bi bi-trash me-1"></i> Vaciar
                        </button>
                        <button
                            className={`btn fw-bold ${comprado ? 'btn-success' : 'btn-warning'}`}
                            onClick={handleComprar}
                            disabled={comprado}
                        >
                            {comprado ? (
                                <><i className="bi bi-check-circle me-1"></i> ¡Comprado!</>
                            ) : (
                                <><i className="bi bi-credit-card me-1"></i> Comprar ahora</>
                            )}
                        </button>
                    </div>

                    {comprado && (
                        <div className="alert alert-success mt-3 mb-0 d-flex align-items-center">
                            <i className="bi bi-check-circle-fill me-2"></i>
                            ¡Gracias por tu compra! Total pagado: ${total.toLocaleString('es-CL')}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Cart;