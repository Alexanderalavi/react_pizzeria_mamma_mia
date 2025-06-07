import React, { useState } from 'react'
import Swal from 'sweetalert2'

const RegisterPage = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
const validarDatos = (e) => {
    e.preventDefault()
  if (!nombre.trim() || !email.trim() || !password.trim()) {
            return Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Todos los campos son necesarios!",
});
    } else if (password !== confirmPassword) {
      return Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "contraseñas no coinciden!",
});
    } else {
      Swal.fire({
  title: "Registro Exitoso!",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
});
    }}
  return (
       <section>
        <h1 className='titulo'>Registro</h1>
      <form className='ingresoDatos' onSubmit={validarDatos}>
        <div className='forma'>
            <label> Nombre</label>
            <input type='text' onChange={(e) => (setNombre(e.target.value))}></input>
        </div>
            <div className='forma'>
            <label> Email</label>
            <input type='email' onChange={(e) => (setEmail(e.target.value))}></input>
        </div>
            <div className='forma'>
            <label> Password</label>
            <input type='password' onChange={(e) => (setPassword(e.target.value))}></input>
        </div>
        <div className='forma'>
            <label> Confirmar Password</label>
            <input type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div>
            <button type="submit" className="btn btn-primary">Registrarse</button>
        </div>
      </form>
    </section>
  )
}

export default RegisterPage
