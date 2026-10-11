import { useState, useEffect } from 'react'

function Carousel() {
    const [slideActual, setSlideActual] = useState(0);

    const slides = [
        { imagen: 'banner1.jpg', titulo: '¡Bienvenido a LevelUp Store!', subtitulo: 'Los mejores videojuegos al mejor precio.' },
        { imagen: 'banner2.jpg', titulo: 'Nuevos Lanzamientos', subtitulo: 'Descubre las últimas novedades del mundo gamer.' },
        { imagen: 'banner3.jpg', titulo: 'Ofertas Especiales', subtitulo: 'Descuentos imperdibles por tiempo limitado.' }
    ];

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSlideActual(prev => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(intervalo);
    }, [slides.length]);

    const irAnterior = () => setSlideActual(prev => (prev - 1 + slides.length) % slides.length);
    const irSiguiente = () => setSlideActual(prev => (prev + 1) % slides.length);

    return (
        <div id="carruselPrincipal" className="carousel slide carousel-custom mx-auto" style={{ maxWidth: '1200px' }}>
            <div className="carousel-inner rounded-4 overflow-hidden shadow">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === slideActual ? 'active' : ''}`}
                        style={{ transition: 'transform 0.6s ease-in-out' }}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}img/${slide.imagen}`}
                            className="d-block w-100"
                            alt={slide.titulo}
                            style={{ height: '450px', objectFit: 'cover', filter: 'brightness(0.65)' }}
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/1200x450/1e1e2f/ffc107?text=' + encodeURIComponent(slide.titulo);
                            }}
                        />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 px-4 py-3">
                            <h3 className="fw-bold text-warning">{slide.titulo}</h3>
                            <p>{slide.subtitulo}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" onClick={irAnterior}>
                <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={irSiguiente}>
                <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>

            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={index === slideActual ? 'active' : ''}
                        onClick={() => setSlideActual(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Carousel;