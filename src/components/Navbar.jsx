import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
   const { suma } = useCart()
  const token = false

if(token === false){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Pizzeria Mamma Mia!</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link type="button" className="btn btn-outline-light me-2" to='/'>🍕 Home</Link>
        </li>
        <li className="nav-item">
          <Link type="button" className="btn btn-outline-light me-2" to='/login'>🔐 Login</Link> 
        </li>
        <li className="nav-item">
          <Link type="button" className="btn btn-outline-light me-2" to='register'>🔐 Register</Link> 
        </li>
      </ul>
     <Link type="button" className="btn btn-outline-primary" to='/cart'> 🛒 Total: $ {suma}</Link>
    </div>
  </div>
</nav>
  )
}
else{
  return(
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Pizzeria Mamma Mia!</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link type="button" className="btn btn-outline-light me-2" to='/'>🍕 Home</Link>
        </li>
        <li className="nav-item">
          <Link type="button" className="btn btn-outline-light me-2" to='profile'>🔓 Profile</Link>
        </li>
        <li className="nav-item">
         <button type="button" className="btn btn-outline-light me-2">🔒 Logout</button> 
        </li>
      </ul>
      <Link type="button" className="btn btn-outline-primary" to='/cart'> 🛒 Total: $ {suma}</Link>
    </div>
  </div>
</nav>
  )
}
}

export default Navbar

