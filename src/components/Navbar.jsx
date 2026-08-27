import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="/img/logo.png"
          alt="Arte Utilitario"
          className="navbar-logo"
        />
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