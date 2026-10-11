## 🎮 LevelUp Store - EFT Frontend I

Aplicación web tipo e-commerce para una tienda de videojuegos, desarrollada con **React + Vite + Bootstrap 5**, aplicando buenas prácticas de desarrollo, gestión de estados y despliegue en la nube.

**🌐 Demo en línea:** [https://Dr3sden.github.io/tienda-videojuegos-Semana8/](https://Dr3sden.github.io/tienda-videojuegos-Semana8/)

## 📋 Descripción del proyecto

El objetivo de este proyecto es desarrollar un sitio web funcional para la venta de videojuegos online, aplicando todas las tecnologías vistas durante el curso: HTML, CSS, JavaScript, Bootstrap 5 y React. La evaluación considera tanto la estructura y diseño del sitio, como la implementación dinámica y el manejo de la interactividad.

## 🎯 Caso planteado

Se ha encargado el desarrollo de un sitio web para una tienda de venta de videojuegos online. La tienda debe contar con:

- Una página de inicio que muestre los videojuegos disponibles
- La posibilidad de filtrar los videojuegos por categoría
- Un formulario de contacto para que los usuarios se puedan comunicar con el administrador

## ✅ Requerimientos implementados

## HTML, CSS y Bootstrap 5

- **Etiquetas semánticas de HTML**: Se utilizan etiquetas como `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` y `<article>` en todos los componentes, garantizando una estructura clara y accesible del contenido.

- **CSS personalizado**: Se creó el archivo `App.css` con variables CSS (`:root`), estilos propios, transiciones y media queries para complementar el diseño de Bootstrap.

- **Bootstrap 5 para maquetación responsiva**: Se integró el CDN oficial de Bootstrap 5.3.3 en el archivo `index.html`, permitiendo el uso de todas sus utilidades y componentes sin instalación adicional.

- **Flexbox y CSS Grid**: Se utilizó intensivamente el sistema de grid de Bootstrap (`row`, `col-*`) junto con utilidades Flex (`d-flex`, `justify-content-*`, `align-items-*`) para distribuir los elementos de forma responsiva.

- **Componentes de Bootstrap 5**: Se implementaron navbar, cards, buttons, forms, modals, offcanvas, alerts, badges, spinner y dropdowns, todos con la sintaxis oficial de Bootstrap 5.

- **Bootstrap Icons**: Se utilizó la librería completa de iconografía mediante las clases `bi bi-*` para enriquecer visualmente el sitio.

## JavaScript

- **Objeto JavaScript con videojuegos**: Se creó el archivo `public/data/productos.json` que contiene un array de 10 videojuegos con la siguiente información: nombre, categoría, precio normal, precio oferta, descripción corta, descripción larga, imagen y plataformas disponibles.

- **Generación dinámica de tarjetas**: El componente `ProductList.jsx` recorre el array de productos con el método `.map()` y renderiza cada uno mediante el componente reutilizable `ProductCard`.

- **Filtrado por categoría**: Se implementó un dropdown de categorías cuyo estado (`categoriaActiva`) se controla desde `App.jsx` y se pasa por props a los componentes correspondientes.

- **Filtrado por plataforma**: Funcionalidad extra que permite filtrar videojuegos por consola (PC, PlayStation, Xbox, Nintendo) mediante el estado `plataformaActiva`.

- **Búsqueda en tiempo real**: Input controlado con el estado `busqueda` que filtra los productos por nombre mientras el usuario escribe.

- **Validación del formulario**: El componente `Contacto.jsx` valida el nombre (mínimo 3 caracteres), el email (formato válido con regex) y el mensaje (mínimo 10 caracteres) antes de permitir el envío, mostrando mensajes de error específicos por cada campo.

## React

- **Modularización en componentes**: El proyecto está dividido en 10 componentes independientes: `Navbar`, `Filtros`, `Carousel`, `ProductList`, `ProductCard`, `ProductModal`, `Cart`, `MiniCart`, `Contacto` y `Footer`.

- **Componente para barra de navegación**: `Navbar.jsx` utiliza clases de Bootstrap 5 y muestra un contador dinámico de productos en el carrito.

- **Componente para lista de videojuegos**: `ProductList.jsx` recibe los productos filtrados por props y los renderiza usando `ProductCard.jsx`, que es totalmente reutilizable.

- **Componente para formulario de contacto**: `Contacto.jsx` tiene su propio estado local y realiza la validación de los datos antes de enviar.

- **Uso de estado (`useState`)**: Se manejan 9 estados en `App.jsx`: productos, carrito, cargando, error, búsqueda, categoría activa, plataforma activa, producto seleccionado y visibilidad del mini carrito.

- **Carga dinámica con `useEffect`**: Se utiliza `fetch()` real a `data/productos.json` dentro del `useEffect`, con manejo de errores mediante `try/catch` y verificación de `response.ok`.

- **Uso de props**: Toda la información se transmite entre componentes mediante props, manteniendo un flujo unidireccional de datos y asegurando que los cambios en un componente se reflejen en los demás.

- **Renderizado condicional**: Se implementaron múltiples estados de renderizado: carga (spinner), error (alerta), sin resultados (mensaje), y contenido (tarjetas de productos).

## Optimización y prueba final

- **Responsividad completa**: El sitio fue probado y optimizado para móvil (≤480px), tablet (≤900px) y escritorio (>900px), ajustando elementos con Bootstrap 5 y media queries.

- **Pruebas de filtrado**: Los filtros de categoría y plataforma fueron probados y funcionan de forma combinada, permitiendo búsquedas más específicas.

- **Pruebas del formulario**: Se verificó la validación exitosa con datos correctos y el manejo adecuado de errores cuando los datos son incorrectos.

- **Publicación en GitHub**: El proyecto está en un repositorio público con historial de commits descriptivos que reflejan el progreso del desarrollo.

- **README.md**: Este documento contiene las instrucciones completas de instalación, uso y estructura del proyecto.

## ✨ Funcionalidades principales

### 🛍️ Catálogo de productos
- Carga dinámica de productos mediante `fetch()` desde `public/data/productos.json`
- Renderizado de tarjetas con imagen, nombre, categoría, plataformas y precios
- Indicador de carga (spinner) y manejo de errores con `try/catch`

### 🔍 Filtros y búsqueda
- Filtro por categoría (dropdown): Todos, RPG, Acción, Aventura, Plataformas, Deportes
- Filtro por plataforma (dropdown): Todas, PC, PlayStation, Xbox, Nintendo
- Búsqueda en tiempo real por nombre
- Los filtros se combinan (ej: RPG + PlayStation muestra Cyberpunk 2077 y Hogwarts Legacy)

### 🛒 Carrito de compras
- Agregar productos con un clic
- Contador dinámico en el navbar
- Mini carrito lateral (offcanvas) con vista rápida
- Eliminar productos individuales
- Vaciar carrito completo
- Total calculado automáticamente
- Botón "Comprar ahora" con confirmación visual animada

### 🖼️ Modal de producto
- Vista detallada con imagen grande
- Descripción larga, categoría y plataformas
- Cierre con tecla `Escape`, clic fuera o botón X

### 📧 Formulario de contacto
- Campos: nombre, email y mensaje
- Validación en el cliente antes de enviar
- Mensajes de error específicos por campo
- Confirmación de envío exitoso con alerta Bootstrap

### 📱 Diseño responsivo
- Adaptación completa a móvil, tablet y escritorio
- Bootstrap Grid para distribución
- Media queries personalizadas para ajustes finos

## 🚀 Tecnologías utilizadas

- **HTML5**: Estructura semántica del sitio.

- **CSS3**: Estilos personalizados y variables CSS.

- **Bootstrap 5**: Maquetación responsiva, grid, cards, formularios y modales.

- **Bootstrap Icons**: Iconografía del sitio.

- **JavaScript ES6+**: Lógica de filtros, validaciones, carrito y eventos.

- **React 18**: Componentes funcionales con hooks (`useState`, `useEffect`).

- **Vite**: Bundler y servidor de desarrollo.

- **Fetch API**: Carga dinámica de productos desde JSON.

- **GitHub Pages**: Despliegue público del sitio.

## ✨ Funcionalidades principales

### 🛍️ Catálogo de productos
- Carga dinámica de productos mediante `fetch()` desde `public/data/productos.json`
- Renderizado de tarjetas con imagen, nombre, categoría, plataformas y precios
- Indicador de carga (spinner) y manejo de errores

### 🔍 Filtros y búsqueda
- Filtro por categoría (dropdown)
- Filtro por plataforma (dropdown)
- Búsqueda en tiempo real por nombre
- Los filtros se combinan (ej: RPG + PlayStation)

### 🛒 Carrito de compras
- Agregar productos con un clic
- Contador dinámico en el navbar
- Mini carrito lateral (offcanvas) con vista rápida
- Eliminar productos individuales
- Vaciar carrito completo
- Total calculado automáticamente
- Botón "Comprar ahora" con confirmación visual

### 🖼️ Modal de producto
- Vista detallada con imagen grande
- Descripción larga, categoría y plataformas
- Cierre con tecla `Escape`, clic fuera o botón X

### 📧 Formulario de contacto
- Campos: nombre, email y mensaje
- Validación en el cliente antes de enviar
- Mensajes de error específicos por campo
- Confirmación de envío exitoso

### 📱 Diseño responsivo
- Adaptación completa a móvil, tablet y escritorio
- Bootstrap Grid (`row`, `col-*`) para distribución
- Media queries personalizadas para ajustes finos

## 📁 Estructura del proyecto
tienda-videojuegos-Semana8/
├── index.html # Punto de entrada HTML
├── package.json # Dependencias y scripts
├── vite.config.js # Configuración de Vite
├── README.md # Este archivo
├── public/
│ ├── data/
│ │ └── productos.json # Datos de los videojuegos
│ └── img/ # Imágenes del sitio
│ ├── banner1.jpg
│ ├── banner2.jpg
│ ├── banner3.jpg
│ ├── cyberpunk2077.jpg
│ ├── zelda-totk.jpg
│ ├── red-dead-redemption2.jpg
│ ├── mario-wonder.jpg
│ ├── hogwarts-legacy.jpg
│ ├── spider-man-2.jpg
│ ├── ea-sports-fc24.jpg
│ ├── nba-2k24.jpg
│ ├── f1-24.jpg
│ └── halo-infinite.jpg
└── src/
├── main.jsx # Punto de entrada de React
├── App.jsx # Componente principal (estados y lógica)
├── components/
│ ├── Navbar.jsx # Barra de navegación
│ ├── Filtros.jsx # Dropdowns y buscador
│ ├── Carousel.jsx # Carrusel de banners
│ ├── ProductList.jsx # Grid de productos
│ ├── ProductCard.jsx # Tarjeta individual de producto
│ ├── ProductModal.jsx # Modal de detalle
│ ├── Cart.jsx # Carrito principal
│ ├── MiniCart.jsx # Carrito lateral (offcanvas)
│ ├── Contacto.jsx # Formulario de contacto
│ └── Footer.jsx # Pie de página
└── styles/
└── App.css # Estilos personalizados

## 🛠️ Instalación y uso

### Requisitos previos
- **Node.js 18 o superior** ([descargar](https://nodejs.org))
- **npm** (viene incluido con Node.js)
- Navegador moderno (Chrome, Firefox, Edge, Brave)

### Pasos para ejecutar el proyecto

**1. Clonar el repositorio**

git clone https://github.com/Dr3sden/tienda-videojuegos-Semana8.git
cd tienda-videojuegos-Semana8

2. Instalar dependencias

npm install

3. Ejecutar en modo desarrollo

npm run dev
Abre en el navegador: http://localhost:5173/tienda-videojuegos-Semana8/

4. Compilar para producción

npm run build

5. Previsualizar la compilación

npm run preview

6. Desplegar a GitHub Pages

npm run deploy

## 🎯 Uso del sitio

**Filtrar productos**

- Haz clic en el dropdown "Categoría" para filtrar por género
- Haz clic en el dropdown "Plataforma" para filtrar por consola
- Usa el buscador para encontrar un juego específico
- Los filtros se combinan automáticamente

**Agregar al carrito**

- Haz clic en el botón "🛒 Agregar" de cualquier producto
- El contador del navbar se actualizará automáticamente
- Haz clic en el ícono del carrito para ver el mini carrito
- Puedes eliminar productos o vaciar el carrito completo
- Presiona "💳 Comprar ahora" para finalizar (simulado)

**Ver detalle de un producto**

- Haz clic en "👁️ Detalle" en cualquier tarjeta
- Se abrirá un modal con la información completa
- Ciérralo con Escape, clic fuera o el botón X

**Enviar mensaje de contacto**

- Baja hasta la sección "Formulario de Contacto"
- Completa los 3 campos (todos obligatorios)
- El sistema validará:
Nombre: mínimo 3 caracteres
Email: formato válido
Mensaje: mínimo 10 caracteres
- Si todo está correcto, verás un mensaje de éxito

## 🎨 Paleta de colores

- **Primario** (`#1e1e2f`): Fondo del navbar, footer y textos principales.
- **Secundario** (`#2d2d44`): Elementos secundarios y detalles.
- **Acento** (`#ffc107`): Botones, badges y elementos destacados.
- **Fondo** (`#f4f4f9`): Fondo general del sitio.
- **Peligro** (`#dc3545`): Descuentos y botones de eliminar.
- **Éxito** (`#28a745`): Confirmaciones y estado "En carrito".

## 📱 Responsividad

El sitio se adapta a los siguientes tamaños de pantalla:

- **📱 Móvil (≤ 480px)**: 1 columna, navbar compacto y filtros apilados.
- **📱 Móvil grande (481-768px)**: 1-2 columnas, filtros en grid.
- **📱 Tablet (769-900px)**: 2-3 columnas.
- **💻 Escritorio (> 900px)**: 3-4 columnas y layout completo.

## 🌐 Despliegue en GitHub Pages

El proyecto está desplegado automáticamente mediante el paquete `gh-pages`.

**URL pública:** [https://Dr3sden.github.io/tienda-videojuegos-Semana8/](https://Dr3sden.github.io/tienda-videojuegos-Semana8/)

**Para actualizar el despliegue:**

git add .
git commit -m "Descripción del cambio"
git push origin main
npm run deploy

## 👨‍💻 Autor

José Ignacio Soto Southerland
Asignatura: Desarrollo Frontend I (PFY2201)
Fecha: Octubre 2026