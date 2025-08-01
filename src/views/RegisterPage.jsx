import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { register } = useUser()
  const navigate = useNavigate()

  const validarDatos = async (e) => {
    e.preventDefault()
    if (!nombre.trim() || !email.trim() || !password.trim()) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son necesarios!',
      })
    }
    if (password !== confirmPassword) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Contraseñas no coinciden!',
      })
    }

    const resultado = await register(email, password)

    if (resultado.ok) {
      Swal.fire({
        title: 'Registro Exitoso!',
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
        text: resultado.error || 'No se pudo registrar',
      })
    }
  }

  return (
    <section>
      <h1 className="titulo">Registro</h1>
      <form className="ingresoDatos" onSubmit={validarDatos}>
        <div className="forma">
          <label> Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="forma">
          <label> Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="forma">
          <label> Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="forma">
          <label> Confirmar Password</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
      </form>
    </section>
  )
}

export default RegisterPage
