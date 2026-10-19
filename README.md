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

Ejemplos de rutas:

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
```

## Tecnologías utilizadas

- React 19: desarrollo de la interfaz mediante componentes.
- Vite 8: entorno de desarrollo y compilación.
- JavaScript: lógica de la aplicación.
- React Router DOM 7: navegación y rutas dinámicas.
- Context API: manejo global del carrito y la autenticación.
- Firebase Authentication: registro, inicio y cierre de sesión.
- Cloud Firestore: consulta de productos y almacenamiento de órdenes.
- CSS Modules: estilos organizados por componente.
- ESLint: revisión del código.

## Instalación y ejecución

Requisitos: Node.js y npm instalados.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/claugutierrezt/arte-utilitario.git
   ```

2. Entrar a la carpeta:

   ```bash
   cd arte-utilitario
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Crear un archivo `.env` en la raíz, tomando como referencia `.env.example`.
5. Completar las variables de entorno de Firebase con los datos de tu proyecto.
6. Ejecutar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

7. Abrir la dirección local que indique Vite.

Para compilar la aplicación:

```bash
npm run build
```

Para previsualizar la compilación:

```bash
npm run preview
```

## Configuración de Firebase

La conexión con Firebase se configura en `src/firebase/config.js`.

Estas son las variables de entorno utilizadas por el proyecto:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

El archivo `.env` local no se debe subir al repositorio. El archivo `.env.example` sirve como plantilla para configurar el proyecto.

Las variables de entorno de Vite utilizadas en el navegador no son una barrera de seguridad; el acceso a la base de datos se controla mediante las reglas de Firestore.

## Base de datos: Cloud Firestore

La aplicación utiliza las colecciones `products` y `orders`.

### Colección `products`

Contiene los productos disponibles en el catálogo. Los identificadores de cada producto corresponden a sus documentos de Firestore.

Ejemplo ilustrativo de un documento:

```json
{
  "name": "Portavasos de viaje",
  "category": "viajes",
  "description": "Portavasos artesanal inspirado en viajes.",
  "price": 150,
  "img": "/img/aceitunas.png",
  "stock": 10
}
```

La aplicación usa `getDocs()` para listar productos y una consulta con `where()` para filtrarlos por categoría. En el detalle, usa `getDoc()` para recuperar un producto por su ID.

### Colección `orders`

Guarda las órdenes creadas durante el checkout por usuarios autenticados.

Cada documento contiene:

- `userId`: identificador del usuario autenticado.
- `userEmail`: correo del usuario autenticado.
- `buyer`: nombre, teléfono, dirección y ciudad de entrega.
- `items`: identificador, nombre, precio y cantidad de cada producto adquirido.
- `total`: importe total de la compra.
- `createdAt`: fecha de creación mediante `serverTimestamp()`.

Ejemplo ilustrativo de una orden:

```json
{
  "userId": "UID_DEL_USUARIO",
  "userEmail": "cliente@ejemplo.com",
  "buyer": {
    "name": "Cliente Ejemplo",
    "phone": "8112345678",
    "address": "Dirección de ejemplo",
    "city": "Monterrey"
  },
  "items": [
    {
      "id": "ID_DEL_PRODUCTO",
      "name": "Portavasos de viaje",
      "price": 150,
      "quantity": 2
    }
  ],
  "total": 300,
  "createdAt": "Timestamp generado por Firestore"
}
```

El checkout utiliza `addDoc()` para guardar la orden. Si el registro es exitoso, muestra el ID generado y vacía el carrito. Si ocurre un error, conserva el carrito y presenta un mensaje al usuario.

## Seguridad de Firestore

El archivo `firestore.rules`, ubicado en la raíz del proyecto, documenta las reglas de acceso utilizadas en Firebase:

- Los productos pueden consultarse públicamente.
- Los clientes no pueden crear, modificar ni eliminar productos.
- Solo los usuarios autenticados pueden crear órdenes.
- Los clientes no pueden leer, actualizar ni eliminar órdenes.

Las reglas deben estar publicadas en Firebase Console para que se apliquen a la base de datos.

## Estructura del proyecto

- `public/img/`: imágenes y recursos gráficos.
- `src/components/`: componentes reutilizables.
- `src/context/`: contextos de autenticación y carrito.
- `src/firebase/`: configuración de Firebase.
- `src/pages/`: vistas principales.
- `src/App.jsx`: rutas y estructura principal.
- `src/main.jsx`: punto de entrada de React.
- `firestore.rules`: reglas de seguridad documentadas.
- `.env.example`: plantilla de variables de entorno.

## Desarrollo por

Claudia Gutiérrez

Proyecto final desarrollado para el curso de React JS.
