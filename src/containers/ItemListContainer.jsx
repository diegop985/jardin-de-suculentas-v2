import { useEffect, useState } from 'react'
import './itemListContainer.css'

 function ItemListContainer ({greetings, titulo}) {
    



   return(
      <div className='itemContainer'>
         { greetings } <br/>
         
         {/* {titulo({tituloProps: "Soy un título", subtituloProps:"Soy el subtitulo"})} */}
         <div className='card'>
            <p className='card-title'>Item-1</p>
            <div className='option-group'>
               <div className='group-up'>
                  <button className='group-up__minus'>-</button>
                  <p className='group-up__qty'></p>
                  <button className='group-up__plus'>+</button>
               </div>
               <div className='group-down'></div>
            </div>
         </div>
     </div>
 )}

 export default ItemListContainer