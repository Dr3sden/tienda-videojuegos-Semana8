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
        <section className="filtros bg-white border-bottom border-warning border-2 shadow-sm py-2">
            <div className="container">
                <div className="row g-2 align-items-center">

                    {/* Dropdown Categoría */}
                    <div className="col-6 col-md-3 position-relative" ref={catRef}>
                        <button
                            className="btn btn-dark w-100 border-warning d-flex justify-content-between align-items-center"
                            onClick={() => {
                                setDropdownCatAbierto(!dropdownCatAbierto);
                                setDropdownPlatAbierto(false);
                            }}
                        >
                            <span>
                                📁 <strong className="text-warning">{categoriaActiva}</strong>
                            </span>
                            <i className={`bi bi-chevron-down small ${dropdownCatAbierto ? 'rotate-180' : ''}`}></i>
                        </button>

                        {dropdownCatAbierto && (
                            <ul className="dropdown-menu show w-100 mt-1 shadow">
                                {categorias.map(cat => (
                                    <li key={cat}>
                                        <button
                                            className={`dropdown-item ${categoriaActiva === cat ? 'active bg-warning text-dark fw-bold' : ''}`}
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
                    <div className="col-6 col-md-3 position-relative" ref={platRef}>
                        <button
                            className="btn btn-dark w-100 d-flex justify-content-between align-items-center"
                            style={{ borderColor: '#6d28d9', borderWidth: '2px' }}
                            onClick={() => {
                                setDropdownPlatAbierto(!dropdownPlatAbierto);
                                setDropdownCatAbierto(false);
                            }}
                        >
                            <span>
                                🎮 <strong style={{ color: '#a78bfa' }}>{plataformaActiva}</strong>
                            </span>
                            <i className={`bi bi-chevron-down small ${dropdownPlatAbierto ? 'rotate-180' : ''}`}></i>
                        </button>

                        {dropdownPlatAbierto && (
                            <ul className="dropdown-menu show w-100 mt-1 shadow">
                                {plataformas.map(plat => (
                                    <li key={plat}>
                                        <button
                                            className={`dropdown-item ${plataformaActiva === plat ? 'active fw-bold' : ''}`}
                                            style={plataformaActiva === plat ? { backgroundColor: '#6d28d9', color: 'white' } : {}}
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
                    <div className="col-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-text bg-light">
                                <i className="bi bi-search"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar videojuego..."
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                aria-label="Buscar videojuego"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Filtros;