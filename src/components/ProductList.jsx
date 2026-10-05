import ProductCard from './ProductCard';

function ProductList({ productos, carrito, onAgregar, onVerDetalle }) {
    if (productos.length === 0) {
        return (
            <div className="sin-resultados">
                <p>🔍 No se encontraron productos con esos filtros.</p>
            </div>
        );
    }

    return (
        <section className="productos">
            <h2 className="section-title">🎯 Productos Destacados</h2>
            <div className="productos-grid">
                {productos.map(producto => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        enCarrito={carrito.some(p => p.id === producto.id)}
                        onAgregar={onAgregar}
                        onVerDetalle={onVerDetalle}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProductList;