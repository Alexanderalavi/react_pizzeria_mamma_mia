import React, { useState } from 'react'

const LoginPage = () => {


const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validarLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return alert('Todos los campos son obligatorios!')
    } else { alert('Inicio de sesión exitoso')}
  }
  return (
  <section>
      <h1 className='titulo'>Login</h1>
      <form className='ingresoDatos' onSubmit={validarLogin}>
        <div className='forma'>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='forma'>
          <label>Contraseña</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </section>
  )
}

export default LoginPage
