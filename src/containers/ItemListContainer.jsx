import { useEffect, useState } from 'react'
import Item from '../components/Item/Item'
import ItemCount from '../components/ItemCount/ItemCount'
import ItemList from '../components/ItemList/ItemList'
import getFetch from '../helpers/getFetch'
import './itemListContainer.css'



   function ItemListContainer ({greetings, titulo}) {
      
      const [productos, setProductos] = useState([]) 

      useEffect(() =>{
         getFetch //Función que simula una API
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            // .finally(() => console.log("Do this at the end"))
         
      },[])
      


   return(
      <div className='itemContainer'>
         { greetings }

         { productos.map( (productos) => <ItemList key = { productos.id} propsItemList = {productos}>
                                             <Item key = { productos.id} propsItem = {productos}/>
                                          </ItemList> )}
      </div>
)}

 export default ItemListContainer