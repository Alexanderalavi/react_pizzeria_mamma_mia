import React, { useState } from 'react'
import Swal from 'sweetalert2'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const validarLogin = (e) => {
    e.preventDefault()

    if (!email.trim() || !password.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son necesarios!",
      })
    }

    if (password.length <= 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La contraseña debe tener más de 6 caracteres",
      })
    }

    return Swal.fire({
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
    })
  }

  return (
    <section>
      <h1 className='titulo'>Login</h1>
      <form className='ingresoDatos' onSubmit={validarLogin}>
        <div className='forma'>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className='forma'>
          <label>Contraseña</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">Ingresar</button>
        </div>
      </form>
    </section>
  )
}

export default LoginPage;