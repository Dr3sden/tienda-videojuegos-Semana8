import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Filtros from './components/Filtros'
import Carousel from './components/Carousel'
import ProductList from './components/ProductList'
import ProductModal from './components/ProductModal'
import Cart from './components/Cart'
import MiniCart from './components/MiniCart'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState('');
    const [categoriaActiva, setCategoriaActiva] = useState('Todos');
    const [plataformaActiva, setPlataformaActiva] = useState('Todas');
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [mostrarMiniCarrito, setMostrarMiniCarrito] = useState(false);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                setCargando(true);
                setError(null);

                const respuesta = await fetch(`${import.meta.env.BASE_URL}data/productos.json`);

                if (!respuesta.ok) {
                    throw new Error(`Error HTTP: ${respuesta.status}`);
                }

                const datos = await respuesta.json();
                setProductos(datos.productos);
                setCargando(false);

            } catch (err) {
                console.error('Error al cargar productos:', err);
                setError('No se pudieron cargar los productos. Por favor, intenta nuevamente.');
                setCargando(false);
            }
        };

        cargarProductos();
    }, []);

    const agregarAlCarrito = (producto) => {
        setCarrito(prev => {
            const existe = prev.find(p => p.id === producto.id);
            if (existe) {
                return prev.map(p => p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p);
            }
            return [...prev, { ...producto, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (id) => setCarrito(prev => prev.filter(p => p.id !== id));
    const vaciarCarrito = () => setCarrito([]);
    const calcularTotal = () => carrito.reduce((t, p) => t + (p.precioOferta * p.cantidad), 0);
    const contarProductos = () => carrito.reduce((t, p) => t + p.cantidad, 0);

    const categorias = ['Todos', 'RPG', 'Acción', 'Aventura', 'Plataformas', 'Deportes'];
    const plataformas = ['Todas', 'PC', 'PlayStation', 'Xbox', 'Nintendo'];

    const productosFiltrados = productos.filter(producto => {
        const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoriaActiva === 'Todos' || producto.categoria === categoriaActiva;
        const coincidePlataforma = plataformaActiva === 'Todas' ||
                                    producto.plataformas.includes(plataformaActiva);
        return coincideBusqueda && coincideCategoria && coincidePlataforma;
    });

    return (
        <div className="app">
            <Navbar
                contarProductos={contarProductos()}
                onAbrirCarrito={() => setMostrarMiniCarrito(true)}
            />

            <Carousel />

            <main className="container my-4">
                <header className="hero text-center text-white p-5 mb-4 rounded-4">
                    <h1 className="display-5 fw-bold text-warning">🎮 LevelUp Store</h1>
                    <p className="lead mb-0">Tu destino definitivo para videojuegos y cultura gamer.</p>
                </header>

                <Filtros
                categorias={categorias}
                categoriaActiva={categoriaActiva}
                setCategoriaActiva={setCategoriaActiva}
                plataformas={plataformas}
                plataformaActiva={plataformaActiva}
                setPlataformaActiva={setPlataformaActiva}
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                />

                {cargando && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                        <p className="mt-3 text-muted">Cargando productos...</p>
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger text-center" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        {error}
                    </div>
                )}

                {!cargando && !error && (
                    <ProductList
                        productos={productosFiltrados}
                        carrito={carrito}
                        onAgregar={agregarAlCarrito}
                        onVerDetalle={setProductoSeleccionado}
                    />
                )}

                <Cart
                    carrito={carrito}
                    onEliminar={eliminarDelCarrito}
                    onVaciar={vaciarCarrito}
                    total={calcularTotal()}
                    contarProductos={contarProductos()}
                />

                <Contacto />
            </main>

            {productoSeleccionado && (
                <ProductModal
                    producto={productoSeleccionado}
                    onCerrar={() => setProductoSeleccionado(null)}
                    onAgregar={agregarAlCarrito}
                />
            )}

            {mostrarMiniCarrito && (
                <MiniCart
                    carrito={carrito}
                    onCerrar={() => setMostrarMiniCarrito(false)}
                    onEliminar={eliminarDelCarrito}
                    onVaciar={vaciarCarrito}
                    total={calcularTotal()}
                    contarProductos={contarProductos()}
                />
            )}

            <Footer />
        </div>
    );
}

export default App;