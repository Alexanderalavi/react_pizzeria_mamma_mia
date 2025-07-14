import { createContext, useState, useContext } from 'react'

const UserContext = createContext()
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "peppino@pizzatower.com",
    displayName: "Peppino",
    token: true,
  })

  const logout = () => setUser({ token: false })

  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  )
}