import React, { useState } from 'react'

const RegisterPage = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
const validarDatos = (e) => {
    e.preventDefault()
  if (!nombre.trim() || !email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios!");
    } else if (password !== confirmPassword) {
      return alert("Las contraseñas no coinciden");
    } else {
      alert("Registro Exitoso!");
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
            <button type='submit'>Registrarse</button>
        </div>
      </form>
    </section>
  )
}

export default RegisterPage
