import { useState } from 'react'
import './App.css'
import CardsDogs from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header titulo='Adopta un perrito' />
      <div className='d-flex flex-wrap justify-content-around'>
        <CardsDogs url="https://cdn.pixabay.com/photo/2019/04/17/20/18/golden-retriever-4135265_1280.jpg" nombre='Alex' descripcion='Amigable, leal y juguetón, con pelaje dorado y sedoso. Ideal para familias, se lleva bien con niños y otros animales' raza='Golden Retriever' color='success' />
        <CardsDogs url="https://cdn.pixabay.com/photo/2022/10/11/12/38/french-bulldog-7514203_1280.jpg" nombre='Lobo' descripcion='Compacto y musculoso, con orejas grandes y expresivas. Afectuoso y sociable, perfecto para apartamentos y dueños activos' raza='Bulldog Francés' color='success' />
        <CardsDogs url="https://cdn.pixabay.com/photo/2018/10/09/21/31/dalmatian-3735979_960_720.jpg" nombre='Hulk' descripcion='Elegante y enérgico, con pelaje blanco y manchas negras. Inteligente y protector, excelente como perro de compañía y guardián' raza='Dálmata' color='success' />
        <CardsDogs url="https://cdn.pixabay.com/photo/2021/05/29/07/06/shiba-6292660_1280.jpg" nombre='Bob' descripcion='Independiente y valiente, con pelaje denso y colores variados. Leal a su familia, requiere socialización temprana y ejercicio regular' raza='Shiba Inu' color='success' />
        
      </div>
      <Footer/>
    </>
  )
}

export default App
