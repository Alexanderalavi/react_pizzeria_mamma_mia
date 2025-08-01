import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUser()
  const navigate = useNavigate()

  const validarLogin = async (e) => {
    e.preventDefault()

    if (!email.trim() || !password.trim()) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son necesarios!',
      })
    }

    if (password.length < 7) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La contraseña debe tener más de 6 caracteres',
      })
    }

    const resultado = await login(email, password)

    if (resultado.ok) {
      Swal.fire({
        title: 'Login Exitoso!',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      }).then(() => navigate('/'))
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: resultado.error || 'No se pudo iniciar sesión',
      })
    }
  }

  return (
    <section>
      <h1 className="titulo">Login</h1>
      <form className="ingresoDatos" onSubmit={validarLogin}>
        <div className="forma">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="forma">
          <label>Contraseña</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </div>
      </form>
    </section>
  )
}

export default LoginPage