import { useState } from 'react'

function Contacto() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario(prev => ({ ...prev, [name]: value }));
        if (errores[name]) {
            setErrores(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validar = () => {
        const nuevosErrores = {};

        if (!formulario.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio';
        } else if (formulario.nombre.trim().length < 3) {
            nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres';
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formulario.email.trim()) {
            nuevosErrores.email = 'El email es obligatorio';
        } else if (!regexEmail.test(formulario.email)) {
            nuevosErrores.email = 'El email no tiene un formato válido';
        }

        if (!formulario.mensaje.trim()) {
            nuevosErrores.mensaje = 'El mensaje es obligatorio';
        } else if (formulario.mensaje.trim().length < 10) {
            nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        }

        return nuevosErrores;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevosErrores = validar();

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            setEnviado(false);
            return;
        }

        setErrores({});
        setEnviado(true);
        setFormulario({ nombre: '', email: '', mensaje: '' });

        setTimeout(() => setEnviado(false), 5000);
    };

    return (
        <section id="contacto" className="card border-0 shadow-sm my-5">
            <div className="card-body p-4 p-md-5">
                <h2 className="border-start border-5 border-warning ps-3 mb-3 fw-bold">
                    📧 Formulario de Contacto
                </h2>
                <p className="text-center text-muted mb-4">
                    ¿Tienes alguna duda o sugerencia? Escríbenos y te responderemos a la brevedad.
                </p>

                <div className="row g-4">
                    {/* Formulario */}
                    <div className="col-12 col-lg-8">
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Nombre */}
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label fw-semibold">
                                    Nombre completo *
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formulario.nombre}
                                    onChange={handleChange}
                                    placeholder="Ej: Juan Pérez"
                                    className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                                />
                                {errores.nombre && (
                                    <div className="invalid-feedback">
                                        <i className="bi bi-exclamation-triangle me-1"></i>
                                        {errores.nombre}
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">
                                    Correo electrónico *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formulario.email}
                                    onChange={handleChange}
                                    placeholder="Ej: juan@ejemplo.cl"
                                    className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                                />
                                {errores.email && (
                                    <div className="invalid-feedback">
                                        <i className="bi bi-exclamation-triangle me-1"></i>
                                        {errores.email}
                                    </div>
                                )}
                            </div>

                            {/* Mensaje */}
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label fw-semibold">
                                    Mensaje *
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formulario.mensaje}
                                    onChange={handleChange}
                                    placeholder="Escribe tu mensaje aquí..."
                                    rows="5"
                                    className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                                ></textarea>
                                {errores.mensaje && (
                                    <div className="invalid-feedback">
                                        <i className="bi bi-exclamation-triangle me-1"></i>
                                        {errores.mensaje}
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="btn btn-warning w-100 fw-bold py-2">
                                <i className="bi bi-send-fill me-2"></i>
                                Enviar mensaje
                            </button>

                            {enviado && (
                                <div className="alert alert-success mt-3 d-flex align-items-center" role="alert">
                                    <i className="bi bi-check-circle-fill me-2"></i>
                                    ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Info */}
                    <div className="col-12 col-lg-4">
                        <div className="bg-light p-4 rounded-3 border-start border-4 border-warning h-100">
                            <h5 className="fw-bold mb-3">Información de contacto</h5>
                            <p className="mb-2">
                                <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                                Av. Siempre Viva 742, Ciudad Gamer
                            </p>
                            <p className="mb-2">
                                <i className="bi bi-telephone-fill text-warning me-2"></i>
                                +56 2 1234 5678
                            </p>
                            <p className="mb-2">
                                <i className="bi bi-envelope-fill text-warning me-2"></i>
                                contacto@levelupstore.cl
                            </p>
                            <p className="mb-0">
                                <i className="bi bi-clock-fill text-warning me-2"></i>
                                Lunes a Viernes: 9:00 - 18:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;