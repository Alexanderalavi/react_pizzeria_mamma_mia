import { createContext, useState, useContext, useEffect } from 'react'

const UserContext = createContext()
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    return token && email ? { token, email } : { token: null, email: null }
  })

  const login = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (!res.ok) throw new Error('Error al iniciar sesión')

      const data = await res.json()
      setUser({ email: data.email, token: data.token })
      localStorage.setItem('token', data.token)
      localStorage.setItem('email', data.email)
      return { ok: true }
    } catch (error) {
      return { ok: false, error: error.message }
    }
  }

  const register = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (!res.ok) throw new Error('Error al registrar usuario')

      const data = await res.json()
      setUser({ email: data.email, token: data.token })
      localStorage.setItem('token', data.token)
      localStorage.setItem('email', data.email)
      return { ok: true }
    } catch (error) {
      return { ok: false, error: error.message }
    }
  }

  const logout = () => {
    setUser({ email: null, token: null })
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }

  const obtenerPerfil = async () => {
    if (!user.token) return null

    try {
      const res = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })

      if (!res.ok) throw new Error('Error al obtener perfil')

      const profile = await res.json()
      return profile
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout, obtenerPerfil }}>
      {children}
    </UserContext.Provider>
  )
}