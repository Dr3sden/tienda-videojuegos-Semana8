import ProductCard from './ProductCard';

function ProductList({ productos, carrito, onAgregar, onVerDetalle }) {
    if (productos.length === 0) {
        return (
            <div className="alert alert-secondary text-center my-5" role="alert">
                <i className="bi bi-search me-2"></i>
                No se encontraron productos con esos filtros.
            </div>
        );
    }

    return (
        <section className="my-5">
            <h2 className="border-start border-5 border-warning ps-3 mb-4 fw-bold">
                🎯 Productos Destacados
            </h2>
            <div className="row g-4">
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