
import { pizzas } from '../data/pizzas'
import Header from './Header'
import Tarjetapizza from './Tarjetapizza'

const Home = () => {
  return (
   <div>
 <Header/>
 <section className="galeria row">
  {pizzas.map( pizza => (<Tarjetapizza key={pizza.id} pizza={pizza}/>))}
 </section> 
   </div>  

      
  )
}

export default Home
