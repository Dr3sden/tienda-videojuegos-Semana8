import { useState, useEffect, useRef } from 'react'

function Filtros({
    categorias, categoriaActiva, setCategoriaActiva,
    plataformas, plataformaActiva, setPlataformaActiva,
    busqueda, setBusqueda
}) {
    const [dropdownCatAbierto, setDropdownCatAbierto] = useState(false);
    const [dropdownPlatAbierto, setDropdownPlatAbierto] = useState(false);
    const catRef = useRef(null);
    const platRef = useRef(null);

    useEffect(() => {
        const handleClickFuera = (e) => {
            if (catRef.current && !catRef.current.contains(e.target)) {
                setDropdownCatAbierto(false);
            }
            if (platRef.current && !platRef.current.contains(e.target)) {
                setDropdownPlatAbierto(false);
            }
        };
        document.addEventListener('mousedown', handleClickFuera);
        return () => document.removeEventListener('mousedown', handleClickFuera);
    }, []);

    return (
        <section className="filtros">
            <div className="filtros-container">
                {/* Dropdown Categoría */}
                <div className="dropdown" ref={catRef}>
                    <button
                        className="dropdown-toggle"
                        onClick={() => {
                            setDropdownCatAbierto(!dropdownCatAbierto);
                            setDropdownPlatAbierto(false);
                        }}
                        aria-expanded={dropdownCatAbierto}
                    >
                        📁 <strong>{categoriaActiva}</strong>
                        <span className={`flecha ${dropdownCatAbierto ? 'abierta' : ''}`}>▼</span>
                    </button>

                    {dropdownCatAbierto && (
                        <ul className="dropdown-menu">
                            {categorias.map(cat => (
                                <li key={cat}>
                                    <button
                                        className={categoriaActiva === cat ? 'activo' : ''}
                                        onClick={() => {
                                            setCategoriaActiva(cat);
                                            setDropdownCatAbierto(false);
                                        }}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Dropdown Plataforma */}
                <div className="dropdown" ref={platRef}>
                    <button
                        className="dropdown-toggle dropdown-toggle-plataforma"
                        onClick={() => {
                            setDropdownPlatAbierto(!dropdownPlatAbierto);
                            setDropdownCatAbierto(false);
                        }}
                        aria-expanded={dropdownPlatAbierto}
                    >
                        🎮 <strong>{plataformaActiva}</strong>
                        <span className={`flecha ${dropdownPlatAbierto ? 'abierta' : ''}`}>▼</span>
                    </button>

                    {dropdownPlatAbierto && (
                        <ul className="dropdown-menu">
                            {plataformas.map(plat => (
                                <li key={plat}>
                                    <button
                                        className={plataformaActiva === plat ? 'activo' : ''}
                                        onClick={() => {
                                            setPlataformaActiva(plat);
                                            setDropdownPlatAbierto(false);
                                        }}
                                    >
                                        {plat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Búsqueda */}
                <div className="filtros-busqueda">
                    <input
                        type="text"
                        placeholder="🔍 Buscar videojuego..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        aria-label="Buscar videojuego"
                    />
                </div>
            </div>
        </section>
    );
}

export default Filtros;