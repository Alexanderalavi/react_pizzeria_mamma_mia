import React from 'react'

const Navbar = () => {
  const total = 25000;
  const token = false;
if(token === false){
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button type="button" class="btn btn-outline-light">🍕 Home</button>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-outline-light">🔐 Login</button> 
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-outline-light">🔐 Register</button> 
        </li>
      </ul>
     <button type="button" class="btn btn-outline-primary"> 🛒 Total: $ {total}</button>
    </div>
  </div>
</nav>
  )
}
else{
  return(
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <button type="button" class="btn btn-outline-light">🍕 Home</button>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-outline-light">🔓 Profile</button>
        </li>
        <li class="nav-item">
         <button type="button" class="btn btn-outline-light">🔒 Logout</button> 
        </li>
      </ul>
      <button type="button" class="btn btn-outline-primary"> 🛒 Total: $ {total}</button>
    </div>
  </div>
</nav>
  )
}
}

export default Navbar
