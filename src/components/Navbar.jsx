import { useUser } from '../context/UserContext'
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { user, logout } = useUser()
  const { suma } = useCart()
  const navigate = useNavigate()

  const cerrarSesion = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzeria Mamma Mia!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="btn btn-outline-light me-2" to="/">🍕 Home</Link>
            </li>
            {user.token ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light me-2" to="/profile">🔓 Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2" onClick={cerrarSesion}>🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light me-2" to="/login">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light me-2" to="/register">🔐 Register</Link>
                </li>
              </>
            )}
          </ul>
          <Link className="btn btn-outline-primary" to="/cart">
            🛒 Total: $ {suma}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar