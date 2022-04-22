import React, {useState} from 'react'
import {MdSearch} from 'react-icons/md'
import {MdClose} from 'react-icons/md'
import SearchModal from './SearchModal'


const SearchWidget = (props) => {

    const [showModal, setShowModal] = useState(false) // Creamos la variable showModal encargado de mostrar u ocultar el modal de buscar dependiendo del click que se haga a su ícono

    return (
        <div style={{fontSize: "30px",cursor:"pointer"}}> {/* Creamos y estilizamos el div que se mostrara/ocultara dependiendo del click al ícono de buscar */}

        <MdSearch onClick = {() => {setShowModal(!showModal)}}/> {/* MdSearch nos mustra el ícono que viene de react icons, a este ícono le agregamos el evento onclick, cada vez que se haga click a este ícono; el status de showModal cambiara, su estado inicial es false, al hacer click pasa a true y viceversa. */}
        {showModal && <SearchModal/>} {/* showModal && es un if increiblemente corto que no recuerdo el nombre pero basicamente nos dice, si showModal es true -> haga tal cosa, en este caso, si showModal es true, renderice el componente searchmodal, si es false, no lo mostramos. basicamente 6 lineas de un if recortado a 3 expresiones */}
        </div>
    )

}

export default SearchWidget
