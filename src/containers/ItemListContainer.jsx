import { useEffect, useState } from 'react'
import ItemCount from '../components/ItemCount/ItemCount'
import getFetch from '../helpers/getFetch'
import './itemListContainer.css'

   function ItemListContainer ({greetings, titulo}) {
      
      const [productos, setProductos] = useState([]) 

      useEffect(() =>{
         getFetch //Función que simula una API
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => console.log("Do this at the end"))
         
      },[])
      
   console.log(productos)


   return(
      <div className='itemContainer'>
         { greetings } <br/><hr/>

         { productos.map( (productos) => <div key = {productos.id}>
            <li key = { productos.id }> {productos.name} </li> 
         </div> )}

         <ItemCount/>
      </div>
)}

 export default ItemListContainer