import { useState } from 'react';
import './itemcount.css'

function ItemCount() {

    const [qty, setQty] = useState(0)

    const [stock, setStock] = useState(6)

    // const stock = [0, 6]

    // const [ minStock, maxStock] = stock

    const handleMinus = () => qty <= 0 ? alert("No puedes quitar más objetos") : setQty( qty -1 ) 

    
    const handlePlus = () => qty >= stock ? alert("No hay más productos en stock") : setQty( qty + 1 )
    

    const handleAdd = () => {
        if (qty == 0){
            alert("Debes agregar productos a tu carrito")
            
        } else if ( qty <= stock) {
            alert(`Has agregado ${qty} unidades a tu carrito`)
            setStock( stock - qty )
            setQty( 0 )
        }
    }


    return (
        <div className='card'>
            <p className='card-title'>Item-1</p>
            <div className='option-group'>
               <div className='group group-up'>
                  <button onClick={ handleMinus } className='group-up__minus'>-</button>
                  <p className='group-up__qty'>{qty}</p>
                  <button onClick={ handlePlus } className='group-up__plus'>+</button>
               </div>
               <div className='group group-down'>
                  <button onClick={handleAdd} className='AddtoCart'>Agregar al Carrito</button>
               </div>
             </div>
             <div>El stock es: {stock}</div>
          </div>
          

    );
}

export default ItemCount;