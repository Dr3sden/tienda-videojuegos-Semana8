function Navbar({ contarProductos, onAbrirCarrito }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-warning" href="#inicio">
                    <span className="fs-4">🎮</span>
                    <span>LevelUp Store</span>
                </a>

                <button
                    className="btn btn-outline-warning position-relative"
                    onClick={onAbrirCarrito}
                    aria-label="Abrir carrito"
                >
                    <i className="bi bi-cart3 fs-5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                        {contarProductos}
                    </span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;