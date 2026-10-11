function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-5">
            <div className="container">
                <div className="row g-4 mb-4">
                    <div className="col-12 col-md-4">
                        <h5 className="text-warning fw-bold mb-3">LevelUp Store</h5>
                        <p className="mb-2">
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            Av. Siempre Viva 742, Ciudad Gamer
                        </p>
                        <p className="mb-2">
                            <i className="bi bi-telephone-fill me-2"></i>
                            +56 2 1234 5678
                        </p>
                        <p className="mb-0">
                            <i className="bi bi-envelope-fill me-2"></i>
                            contacto@levelupstore.cl
                        </p>
                    </div>

                    <div className="col-12 col-md-4">
                        <h5 className="text-warning fw-bold mb-3">Síguenos</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none">
                                    <i className="bi bi-facebook me-2"></i>Facebook
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none">
                                    <i className="bi bi-instagram me-2"></i>Instagram
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none">
                                    <i className="bi bi-twitter-x me-2"></i>X (Twitter)
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-none">
                                    <i className="bi bi-youtube me-2"></i>YouTube
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4">
                        <h5 className="text-warning fw-bold mb-3">Newsletter</h5>
                        <p className="small">Suscríbete para recibir ofertas exclusivas.</p>
                        <form onSubmit={(e) => { e.preventDefault(); alert('¡Gracias por suscribirte!'); }}>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Tu email"
                                    required
                                />
                                <button className="btn btn-warning fw-bold" type="submit">
                                    Suscribirse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <hr className="border-secondary" />
                <p className="text-center small mb-0 text-white-50">
                    &copy; 2026 LevelUp Store. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;