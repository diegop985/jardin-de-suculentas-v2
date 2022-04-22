import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar/Navbar'
import Titulo from '../components/Titulo/Titulo'
import Input from '../components/Input/Input'
import ItemListContainer from '../containers/ItemListContainer'
import ItemCount from '../components/ItemCount/ItemCount'
import SearchWidget from '../components/Search/SearchWidget'
import Pokemons from '../components/Pokemons/Pokemons'




  
function RoutesApp() {

    const [count, setCount] = useState(0)

    const handleConsole = () => {
        console.log("Soy evento")
    }
  
    let titulo = "Bienvenido al Jardín de Suculentas"
  
  
    const fnSaludo = () => {
        console.log("Saluda!")
    }
  


    return (
        <>

        <NavBar />

        <Titulo tituloProps= {titulo} subtituloProps="Compra!!"/>
        <SearchWidget/>
        <Pokemons/>
        <ItemListContainer 
            titulo = {Titulo}
        />

        </>
        
    )
}

export default RoutesApp;