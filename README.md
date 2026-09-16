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
- Estado global del carrito mediante Context API.
- Implementación de `CartProvider` y `CartContext`.
- Agregado de productos al carrito sin duplicar items.
- Actualización de cantidades de productos existentes.
- Eliminación individual de productos del carrito.
- Opción para vaciar completamente el carrito.
- Cálculo dinámico de subtotales y total de compra.
- Contador dinámico de productos en el `CartWidget`.
- Vista de carrito con estado vacío y listado de productos.
- Control de cantidad directamente desde el carrito.
- Selección de cantidad desde las tarjetas del catálogo.
- Respeto del stock máximo disponible.
- Feedback visual al agregar un producto al carrito.

## Mejoras adicionales

Además de los requerimientos de la entrega, se agregaron algunas mejoras de experiencia de usuario:

- Selector de cantidad directamente desde las tarjetas del catálogo.
- Modificación de cantidades desde la vista del carrito.
- Límite mínimo de una unidad dentro del carrito.
- Respeto del stock máximo disponible.
- Cambio visual temporal a "Producto agregado" después de agregar un producto.
- Contador visual del carrito con formato de burbuja.
- Navegación directa al carrito desde el `CartWidget`.

Estas mejoras se encuentran comentadas dentro del código con la indicación:

```js
// Esto no se pidió, pero yo lo haría así:
```

## Navegación

La aplicación utiliza `react-router-dom` para manejar la navegación sin recargar la página.

Rutas principales:

- `/` → muestra todos los productos.
- `/category/:id` → muestra los productos filtrados por categoría.
- `/item/:id` → muestra el detalle de un producto según su identificador.
- `/cart` → muestra el carrito de compras.
- `*` → muestra la página 404 para rutas inexistentes.

Ejemplos:

```txt
/category/viajes
/category/musicos
/category/momentos
/item/1
/item/2
/item/3
/cart
```

## Carrito de compras

El carrito utiliza Context API para mantener un estado global accesible desde los distintos componentes de la aplicación.

El contexto incluye las siguientes funciones:

- `addItem(item, quantity)` → agrega un producto al carrito.
- `removeItem(itemId)` → elimina un producto por su identificador.
- `clear()` → vacía completamente el carrito.
- `isInCart(id)` → verifica si un producto ya está agregado.
- `updateQuantity(itemId, newQuantity)` → permite modificar la cantidad desde el carrito.

Cuando un producto ya existe en el carrito, se actualiza su cantidad en lugar de crear un item duplicado.

Las actualizaciones del estado se realizan de manera inmutable utilizando métodos como `.map()`, `.filter()` y el spread operator.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- Context API
- CSS Modules

## Ejecución del proyecto

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Luego abrir en el navegador la URL indicada por Vite, normalmente:

```txt
http://localhost:5173/
```

## Estado actual

El proyecto cuenta con navegación dinámica, detalle de productos, control de stock y un carrito de compras funcional con estado global mediante Context API.

La persistencia del carrito después de recargar la página no forma parte de esta entrega y se implementará posteriormente con Firebase.