
import Header from './Header'
import Tarjetapizza from './Tarjetapizza'

const Home = () => {
  return (
   <div>
 <Header/>
 <section className="galeria">
<Tarjetapizza imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c" nombre="Pizza Napolitana" alternativo="Napolitana" ingredientes={["mozzarella", "tomates", "jamón", "orégano"]}
 precio="5950"/>

<Tarjetapizza imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab" nombre="Pizza Española" alternativo="Española" ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]} precio="6950"/>

<Tarjetapizza imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3" nombre="Pizza Pepperoni" alternativo="Pepperoni" ingredientes={["mozzarella", "pepperoni", "orégano"]} precio="6950"/>
 </section> 
   </div>  

      
  )
}

export default Home
