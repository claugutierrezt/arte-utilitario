import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <ItemListContainer greeting="Arte Utilitario" />

        <section className="detail-section">
          <ItemDetailContainer />
        </section>
      </main>
    </>
  )
}

export default App