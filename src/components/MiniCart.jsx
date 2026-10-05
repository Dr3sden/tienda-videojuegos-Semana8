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
            <div className="mini-carrito-overlay" onClick={onCerrar}></div>

            <aside className="mini-carrito">
                <div className="mini-carrito-header">
                    <h3>🛒 Tu Carrito ({contarProductos})</h3>
                    <button className="mini-cerrar" onClick={onCerrar} aria-label="Cerrar">✖</button>
                </div>

                {carrito.length === 0 ? (
                    <div className="mini-vacio">
                        <p>😢 Tu carrito está vacío</p>
                        <button className="btn-mini-cerrar" onClick={onCerrar}>
                            Seguir comprando
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mini-carrito-items">
                            {carrito.map(producto => (
                                <div key={producto.id} className="mini-item">
                                    <img
                                        src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                                        alt={producto.nombre}
                                    />
                                    <div className="mini-item-info">
                                        <h4>{producto.nombre}</h4>
                                        <p>${producto.precioOferta.toLocaleString('es-CL')} x {producto.cantidad}</p>
                                    </div>
                                    <button
                                        className="mini-eliminar"
                                        onClick={() => onEliminar(producto.id)}
                                        aria-label={`Eliminar ${producto.nombre}`}
                                    >✖</button>
                                </div>
                            ))}
                        </div>

                        <div className="mini-carrito-footer">
                            <div className="mini-total">
                                <span>Total:</span>
                                <strong>${total.toLocaleString('es-CL')}</strong>
                            </div>

                            <button
                                className={`btn-mini-comprar ${comprado ? 'comprado' : ''}`}
                                onClick={handleComprar}
                                disabled={comprado}
                            >
                                {comprado ? '✅ ¡Comprado!' : '💳 Comprar ahora'}
                            </button>

                            {comprado && (
                                <p className="mini-mensaje-comprado">
                                    🎉 ¡Gracias por tu compra! Total: ${total.toLocaleString('es-CL')}
                                </p>
                            )}

                            {!comprado && (
                                <button className="btn-mini-seguir" onClick={onCerrar}>
                                    Seguir comprando
                                </button>
                            )}
                        </div>
                    </>
                )}
            </aside>
        </>
    );
}

export default MiniCart;