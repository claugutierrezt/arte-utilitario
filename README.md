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

## Estructura principal

El proyecto utiliza componentes separados para mantener responsabilidades claras:

- `ItemListContainer`: obtiene la colección de productos y administra la lógica de carga.
- `ItemList`: recibe la colección y genera el listado.
- `Item`: muestra la información resumida de cada producto.
- `ItemDetailContainer`: obtiene un producto por su identificador y administra el estado.
- `ItemDetail`: muestra la información completa del producto.
- `ItemCount`: administra la cantidad seleccionada respetando el stock disponible.
- `Navbar`: contiene la navegación principal.
- `CartWidget`: representa visualmente el carrito.

## Promesas asíncronas

Los datos del catálogo se encuentran temporalmente en un mock local.

La función `getProducts()` devuelve una promesa y utiliza `setTimeout` para simular la demora que tendría una petición a una API.

Para la vista individual se creó la función:

```js
getProductById(productId)