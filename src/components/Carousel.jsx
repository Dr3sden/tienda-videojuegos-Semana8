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
        <div className="carousel">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === slideActual ? 'activo' : ''}`}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}img/${slide.imagen}`}
                            alt={slide.titulo}
                            onError={(e) => {
                                console.error('❌ Banner no encontrado:', slide.imagen);
                                e.target.src = 'https://via.placeholder.com/1200x450/1e1e2f/ffc107?text=' + encodeURIComponent(slide.titulo);
                            }}
                        />
                        <div className="carousel-caption">
                            <h3>{slide.titulo}</h3>
                            <p>{slide.subtitulo}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="carousel-btn prev" onClick={irAnterior} aria-label="Anterior">❮</button>
            <button className="carousel-btn next" onClick={irSiguiente} aria-label="Siguiente">❯</button>

            <div className="carousel-indicadores">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={index === slideActual ? 'activo' : ''}
                        onClick={() => setSlideActual(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;