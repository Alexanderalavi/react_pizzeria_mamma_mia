import { useUser } from './context/UserContext'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import RegisterPage from './views/RegisterPage'
import ProfilePage from './views/ProfilePage'

function App() {
  const { user } = useUser()

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/profile' element={user.token ? <ProfilePage /> : <Navigate to='/login' />} />
      <Route path='/login' element={!user.token ? <LoginPage /> : <Navigate to='/' />} />
      <Route path='/register' element={!user.token ? <RegisterPage /> : <Navigate to='/' />} />
    </Routes>
  )
}

export default App