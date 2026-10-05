import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import ProductList from './components/ProductList'
import ProductModal from './components/ProductModal'
import Cart from './components/Cart'
import MiniCart from './components/MiniCart'
import Footer from './components/Footer'
import Filtros from './components/Filtros'
import productosData from './data/productos.json'

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
                console.log('🚀 useEffect: Iniciando carga...');
                await new Promise(resolve => setTimeout(resolve, 800));
                setProductos(productosData.productos);
                console.log(`✅ ${productosData.productos.length} productos cargados`);
                setCargando(false);
            } catch (err) {
                console.error('❌ Error:', err);
                setError('No se pudieron cargar los productos.');
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

            <main className="container">

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
                    <div className="estado-carga">
                        <div className="spinner"></div>
                        <p>Cargando productos...</p>
                    </div>
                )}

                {error && <div className="estado-error"><p>⚠️ {error}</p></div>}

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