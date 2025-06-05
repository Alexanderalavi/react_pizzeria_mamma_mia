import React from 'react'

const Navbar = () => {
  const total = 25000;
  const token = false;
if(token === false){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button type="button" className="btn btn-outline-light">🍕 Home</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-outline-light">🔐 Login</button> 
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-outline-light">🔐 Register</button> 
        </li>
      </ul>
     <button type="button" className="btn btn-outline-primary"> 🛒 Total: $ {total}</button>
    </div>
  </div>
</nav>
  )
}
else{
  return(
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <button type="button" className="btn btn-outline-light">🍕 Home</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-outline-light">🔓 Profile</button>
        </li>
        <li className="nav-item">
         <button type="button" className="btn btn-outline-light">🔒 Logout</button> 
        </li>
      </ul>
      <button type="button" className="btn btn-outline-primary"> 🛒 Total: $ {total}</button>
    </div>
  </div>
</nav>
  )
}
}

export default Navbar
