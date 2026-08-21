import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Arte Utilitario
      </div>

      <div className="navbar-links">
        <a href="#">Viajes</a>
        <a href="#">Músicos</a>
        <a href="#">Momentos</a>
      </div>

      <CartWidget />
    </nav>
  )
}

export default Navbar