import { Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'

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