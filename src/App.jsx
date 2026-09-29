import { Routes, Route } from 'react-router-dom'
import styles from './App.module.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Arte Utilitario" />}
          />

          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Arte Utilitario" />}
          />

          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App