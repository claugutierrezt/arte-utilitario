# Arte Utilitario

Proyecto desarrollado en React con Vite para el curso de React JS.

La aplicación representa un e-commerce de portavasos artesanales organizados por categorías como viajes, músicos y momentos.

En esta etapa el proyecto fue migrado a Firebase para utilizar Cloud Firestore como base de datos, Firebase Authentication para el registro e inicio de sesión de usuarios y Firestore para almacenar las órdenes de compra.

## Funcionalidades actuales

- Listado dinámico de productos.
- Renderizado de productos mediante `.map()`.
- Obtención de productos desde Cloud Firestore.
- Consultas asíncronas mediante `async/await`.
- Uso de `useState` y `useEffect`.
- Separación de responsabilidades entre componentes y páginas.
- Organización de las vistas principales dentro de la carpeta `pages`.
- Vista individual de detalle de producto.
- Consulta de producto por `id` desde Firestore.
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
- Registro de usuarios con email y contraseña.
- Inicio de sesión con usuarios existentes.
- Cierre de sesión.
- Persistencia de sesión mediante `onAuthStateChanged`.
- Estado global del usuario mediante `AuthContext`.
- Visualización del email del usuario autenticado.
- Checkout protegido para usuarios autenticados.
- Redirección al login cuando un usuario no autenticado intenta acceder al checkout.
- Validación para impedir compras con el carrito vacío.
- Formulario de datos de entrega.
- Generación de órdenes en Cloud Firestore.
- Asociación de órdenes con el usuario autenticado.
- Registro de productos, cantidades, precios y total dentro de cada orden.
- Fecha de creación mediante `serverTimestamp()`.
- Confirmación de compra con ID de orden generado por Firebase.
- Vaciado del carrito únicamente después de crear la orden correctamente.
- Manejo de estados de carga y errores en consultas, autenticación y generación de órdenes.

## Mejoras adicionales

Además de los requerimientos de la entrega, se agregaron algunas mejoras de experiencia de usuario:

- Selector de cantidad directamente desde las tarjetas del catálogo.
- Modificación de cantidades desde la vista del carrito.
- Límite mínimo de una unidad dentro del carrito.
- Respeto del stock máximo disponible.
- Cambio visual temporal a "Producto agregado" después de agregar un producto.
- Contador visual del carrito con formato de burbuja.
- Navegación directa al carrito desde el `CartWidget`.

## Navegación

La aplicación utiliza `react-router-dom` para manejar la navegación sin recargar la página.

Rutas principales:

- `/` → muestra todos los productos.
- `/category/:id` → muestra los productos filtrados por categoría.
- `/item/:id` → muestra el detalle de un producto según su identificador.
- `/cart` → muestra el carrito de compras.
- `/login` → permite iniciar sesión.
- `/register` → permite crear una cuenta.
- `/checkout` → muestra el proceso de compra protegido.
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
/login
/register
/checkout