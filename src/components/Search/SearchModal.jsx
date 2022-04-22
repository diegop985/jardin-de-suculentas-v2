import React, {useState} from 'react'
import './searchbar.css'
import SearchItemList from './SearchItemList'

const SearchModal = () => {


    const [query, SetQuery] = useState ("") // El array que llevara el query (petición) de lo que el usuario escriba en el input del search.
    const handleSearch = (e) => { // Creamos una función encargada de manejar el evento en el input. La función recibe el evento (e) por parámetro y lo operámos en la fn.
        SetQuery(e.target.value) // El valor del array query pasa a ser el valor del contenido del evento, en este caso, cada tecla se va actualizando en tiempo real, el array irá agarrando cada letra que se vaya ingresando y se tendrá siempre el array completo. 
        console.log(e.target.value) //debug
    }

    return(
        <section className = "search-modal"> {/* Section que contendrá el modal */}

        <input value={query} onChange={(e)=>{handleSearch(e)}} ></input> {/* El evento on change envia el valor del input a handleSearch, que a su vez cambia el estado del query a lo que hay en el input. */}
        
        
        <div className='searchItemContainer'>{query.length && <SearchItemList query = {query} />}</div> {/* Trae el componente search item list y envía como prop el query que ya procesamos en la función handleSearch en el onChange del input, mostrará el resultado de la busqueda. */}

    </section>
    )
}

export default SearchModal