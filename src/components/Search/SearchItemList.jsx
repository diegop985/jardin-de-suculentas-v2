import React, {useState, useEffect} from 'react';

//ACÁ ESTA LO BUENO


const SearchItemList = ({query}) => { // Este componente trae el query (array con el producto que queremos filtrar para que se muestre)
    
    const [product, setProduct] = useState([]) // Inicializamos el array product que contendrá el filtrado del query. 

    const URL = "https://run.mocky.io/v3/d134209b-0c4e-4f52-9a5d-453fee064071" // URL del json que contiene nuestros productos, al que harémos fetch. 
    
    
    useEffect(() => { // El hook useEffect tiene el mayor y particular uso que, ejecuta lo que hay dentro de este, una vez que el dom haya sido si bien cargado por completo en la primera impresion, ó cada vez que se actualiza, es decir, la información que entra el useEffect es siempre la última ya que el useEffect se activa cada vez que la página es actualizada. Quiere decir, realiza una acción siempre que haya un cambio en la página. Por esto, useEffect es tan útil a la hora de realizar acciones que requieren la información actualizada. 
      
        fetch(URL) //Hacemos fecth al URL. El Fetch nos permite traer la información del HTTP request que es un json y lo podemos manipular a nuestro antojo
        .then( resp => resp.json()) // resp recibe la respuesta de la promesa y la convierte en un objeto de javascript que peuede ser manejado 
        .then( data => { //Ingresamos a la data que entrega la respuesta
            console.log(data)
            const results = data.filter(prod => prod.name.includes(query)) //creamos la variable results solo por comodidad, podemos asignar directamente su valor que es | data = información -fetcheada- | con el método filter que crea una nuevo array filtrado según compla lo indicado en la callback fn. La función filtrara todos los valores que su nombre contenga el valor del string query. 
            setProduct(results) // Seteamos el array product con el array creado en results
        })
        .catch( error => console.log(error)) //catcheamos erroes 
        
        console.log(product)
      
    }, [query]) //Acá índicamos al hook useEffect que se actualice cada vez que [query] cambie 
    

    
    return (
        <div>

        {

            product.length ?  // if encargado de dar el estado de la busqueda en el modal. 
            (product.map(  prod => {  //Si hay data en el array que está creando product.map, entonces se muestra el siguiente div
                return(
                    <div key={prod.id}> {/* a cada div que se genera le asigna un key con el id del producto */}
                        <p>{prod.name}</p>
                    </div>
                )
            }))
            : <p>Cargando productos...</p> //Si no hay contenido que se haya enontrado, el modal mostrará "Cargando productos..."

        }

        </div>
    )


}

export default SearchItemList