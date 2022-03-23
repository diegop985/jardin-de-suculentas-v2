import { useEffect, useState } from 'react'


 function ItemListContainer ({greetings, titulo}) {
     //Acá estamos pasando dos props, el saludo normal, o un prop "normal", y una función, que contiene dos parametros ó props. Estos props pertenercen a <Titulo />

   // let count = 0

   const [count, setCount] = useState(0)
   const [ultimoClick, setUltimoClick] = useState(JSON.stringify(new Date()))
   const [bool, setBool] = useState(true)


   useEffect (() =>{
      //acciones async y funciones pesadas como llamados a una API
      console.log("asincronicos")
      return () => {
         console.log("Limpiando la memoria ")
      }
   })

   useEffect (() =>{
      //acciones async y funciones pesadas como llamados a una API
      alert("asincronicos que cambian con filtro")
   },[bool])

   
   const handleCount = () => {
      
      setCount( count + 1 )


      setUltimoClick( JSON.stringify(new Date()) )

   }

   console.log("sincronicos")
    return(
     <div>
         { greetings } <br/>
         <button onClick = { handleCount }>Click</button><br/>
         <button onClick = { () => { setBool(!bool) } }>Click</button><br/>

         <p>El contador está en {count}</p>
         <p>Clickeado por última vez en {ultimoClick}</p>


         {titulo({tituloProps: "Soy un título", subtituloProps:"Soy el subtitulo"})}

     </div>
 )}

 export default ItemListContainer