function Navbar({ contarProductos, onAbrirCarrito }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="logo">🎮</span>
                    <span className="brand-name">LevelUp Store</span>
                </div>

                <button
                    className="navbar-carrito"
                    onClick={onAbrirCarrito}
                    aria-label="Abrir carrito"
                >
                    <span>🛒</span>
                    <span className="badge">{contarProductos}</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;