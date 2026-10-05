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
        <div className="modal-overlay" onClick={onCerrar}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-cerrar" onClick={onCerrar} aria-label="Cerrar">✖</button>

                <div className="modal-grid">
                    <div className="modal-imagen">
                        <img
                            src={`${import.meta.env.BASE_URL}${producto.imagen}`}
                            alt={producto.nombre}
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/400x500/1e1e2f/ffc107?text=' + encodeURIComponent(producto.nombre);
                            }}
                        />
                        {descuento > 0 && (
                            <span className="modal-descuento">-{descuento}%</span>
                        )}
                    </div>

                    <div className="modal-info">
                        <h2>{producto.nombre}</h2>
                        <div className="modal-tags">
                            <span className="modal-categoria">{producto.categoria}</span>
                            {producto.plataformas.map(plat => (
                                <span key={plat} className="modal-plataforma">{plat}</span>
                            ))}
                        </div>
                        <p className="modal-descripcion">{producto.descripcionLarga}</p>

                        <div className="modal-precios">
                            <span className="precio-normal">
                                ${producto.precioNormal.toLocaleString('es-CL')}
                            </span>
                            <span className="precio-oferta">
                                ${producto.precioOferta.toLocaleString('es-CL')}
                            </span>
                        </div>

                        <button
                            className="btn-agregar-modal"
                            onClick={() => {
                                onAgregar(producto);
                                onCerrar();
                            }}
                        >
                            🛒 Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;