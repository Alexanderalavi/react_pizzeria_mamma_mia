import Swal from 'sweetalert2'
import './App.css'
import Footer from './components/Footer'
import LoginPage from './views/LoginPage'
import Navbar from './components/Navbar'
import RegisterPage from './views/RegisterPage'
import 'sweetalert2/dist/sweetalert2.min.css'
import CartPizza from './views/CartPizza'
import Pizza from './views/Pizza'
import { Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import ProfilePage from './views/ProfilePage'
import NotFound from './views/NotFound'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
    <CartProvider>
<Navbar/>
<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/register' element={<RegisterPage />} />
  <Route path='/login' element={<LoginPage />} />
  <Route path='/cart' element={<CartPizza />} />
  <Route path='/profile' element={<ProfilePage />} />
   <Route path='/pizza/p001' element={<Pizza />} />
   <Route path='/*' element={<NotFound />} />
</Routes>
<Footer/>
</CartProvider>
    </>
  )
}

export default App
