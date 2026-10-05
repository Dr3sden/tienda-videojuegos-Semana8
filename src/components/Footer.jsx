function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-columna">
                    <h4>LevelUp Store</h4>
                    <p>📍 Av. Siempre Viva 742, Ciudad Gamer</p>
                    <p>📞 +56 2 1234 5678</p>
                    <p>✉️ contacto@levelupstore.cl</p>
                </div>
                <div className="footer-columna">
                    <h4>Síguenos</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">X (Twitter)</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
                <div className="footer-columna">
                    <h4>Newsletter</h4>
                    <p>Suscríbete para recibir ofertas exclusivas.</p>
                    <form onSubmit={(e) => { e.preventDefault(); alert('¡Gracias por suscribirte!'); }}>
                        <input type="email" placeholder="Tu email" required />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 LevelUp Store. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;