import Swal from 'sweetalert2'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import RegisterPage from './components/RegisterPage'
import 'sweetalert2/dist/sweetalert2.min.css'
import CartPizza from './components/CartPizza'
import Pizza from './components/Pizza'

function App() {

  return (
    <>
<Navbar/>
{/*<Home/>*/}
{/*<RegisterPage/>*/}
{/*<LoginPage/>*/}
{/*<CartPizza />*/}
<Pizza />
<Footer/>
    </>
  )
}

export default App
