import React from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const { user, logout } = useUser()
  const navigate = useNavigate()

  const cerraSesion = () => {
    logout()
    navigate('/login')
  }

  return (
    <section className="container my-5 text-center">
      <h2 className="fw-bolder text-uppercase">Tu Perfil</h2>

      {user.email ? (
        <>
          <p>
            Email: <span className="fw-bolder">{user.email}</span>
          </p>
          <button className="btn btn-primary mt-3" onClick={cerraSesion}>
            Cerrar Sesión
          </button>
        </>
      ) : (
        <p className="text-danger">No estás autenticado</p>
      )}
    </section>
  )
}

export default ProfilePage
