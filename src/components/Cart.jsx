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
            <section className="carrito" id="seccion-carrito">
                <h2 className="section-title">🛒 Carrito de Compras</h2>
                <div className="carrito-vacio">
                    <p>😢 Tu carrito está vacío</p>
                    <p className="texto-pequeno">Agrega productos para comenzar tu compra</p>
                </div>
            </section>
        );
    }

    return (
        <section className="carrito" id="seccion-carrito">
            <h2 className="section-title">🛒 Carrito de Compras</h2>

            <div className="carrito-items">
                {carrito.map(producto => (
                    <div key={producto.id} className="carrito-item">
                        <img
                            src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                            alt={producto.nombre}
                            className="item-imagen"
                        />
                        <div className="item-info">
                            <h4>{producto.nombre}</h4>
                            <p>${producto.precioOferta.toLocaleString('es-CL')} x {producto.cantidad}</p>
                        </div>
                        <div className="item-acciones">
                            <span className="item-subtotal">
                                ${(producto.precioOferta * producto.cantidad).toLocaleString('es-CL')}
                            </span>
                            <button
                                className="btn-eliminar"
                                onClick={() => onEliminar(producto.id)}
                                aria-label={`Eliminar ${producto.nombre}`}
                            >✖</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="carrito-resumen">
                <p>Total de productos: <strong>{contarProductos}</strong></p>
                <p className="carrito-total">
                    Total: <strong>${total.toLocaleString('es-CL')}</strong>
                </p>

                <div className="carrito-botones">
                    <button className="btn-vaciar" onClick={onVaciar}>
                        🗑️ Vaciar
                    </button>
                    <button
                        className={`btn-comprar ${comprado ? 'comprado' : ''}`}
                        onClick={handleComprar}
                        disabled={comprado}
                    >
                        {comprado ? '✅ ¡Comprado!' : '💳 Comprar ahora'}
                    </button>
                </div>

                {comprado && (
                    <p className="mensaje-comprado">
                        🎉 ¡Gracias por tu compra! Total pagado: ${total.toLocaleString('es-CL')}
                    </p>
                )}
            </div>
        </section>
    );
}

export default Cart;