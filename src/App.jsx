import { useState } from 'react'
import NavBar from './components/NavBar/Navbar'
import Titulo from './components/Titulo/Titulo'
import Input from './components/Input/Input'




function App () {

    const [count, setCount] = useState(0)

    const handleConsole = () => {
        console.log("Soy evento")
    }

    let titulo = "Bienvenido al Jardín de Suculentas"


    const fnSaludo = () => {
        console.log("Saluda!")
    }


    return (

        <div className="App" >

            <NavBar />

            <Titulo tituloProps= {titulo} subtituloProps="Compra!!"/>

            <Input placeholder = "Ingrese el Nombre" saludo ={fnSaludo} />


        </div>
    )

}


export default App