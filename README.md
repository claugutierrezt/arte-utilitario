# Arte Utilitario

Proyecto desarrollado en React con Vite para el curso de React JS.

La aplicación representa un catálogo de portavasos artesanales organizados por categorías como viajes, músicos y momentos.

## Funcionalidades actuales

- Listado dinámico de productos.
- Renderizado de productos mediante `.map()`.
- Obtención de productos mediante una promesa simulada.
- Uso de `useState` y `useEffect`.
- Separación de responsabilidades entre componentes.
- Vista individual de detalle de producto.
- Búsqueda dinámica de producto por `id`.
- Reutilización del componente `ItemCount`.
- Control de stock en el contador.
- Diseño responsive.
- Navegación con `react-router-dom`.
- Rutas dinámicas por categoría.
- Rutas dinámicas por producto.
- Navegación interna con `Link` y `NavLink`.
- Ruta 404 para URLs inexistentes.
- Navbar y Footer persistentes en toda la aplicación.
- Uso de CSS Modules para encapsular los estilos de cada componente.

## Navegación

La aplicación utiliza `react-router-dom` para manejar la navegación sin recargar la página.

Rutas principales:

- `/` → muestra todos los productos.
- `/category/:id` → muestra los productos filtrados por categoría.
- `/item/:id` → muestra el detalle de un producto según su identificador.
- `*` → muestra la página 404 para rutas inexistentes.

Ejemplos:

```txt
/category/viajes
/category/musicos
/category/momentos

/item/1
/item/2
/item/3