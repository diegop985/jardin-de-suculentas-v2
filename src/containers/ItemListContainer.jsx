import { useEffect, useState } from 'react'
import ItemCount from '../components/ItemCount/ItemCount'
import './itemListContainer.css'

function ItemListContainer ({greetings, titulo}) {
    



   return(
      <div className='itemContainer'>
         { greetings } <br/>
         
         {/* {titulo({tituloProps: "Soy un título", subtituloProps:"Soy el subtitulo"})} */}
         <ItemCount/>
      </div>
)}

 export default ItemListContainer