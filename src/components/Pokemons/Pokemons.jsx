import React, { useState, useEffect } from 'react';


function Pokemons() {


    const [pokemonsArr, setPokemonsArr] = useState([])
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=10"
    // const URL = "https://run.mocky.io/v3/d134209b-0c4e-4f52-9a5d-453fee064071"

    //FORMA 1, CON FETCH Y THEN|CATCH

    // useEffect(() => {

    //   fetch(URL)
    //     .then(resp => resp.json())
    //     .then(data => {
    //       const {results} = data
    //       setPokemonsArr(results)
    //     })
    //     .catch(err => err);
    // }, [])
    

      // METODO 2 CON ASYNC ASWAIT | TRY - CATCH 
    const getFetchApi = async () => {
      try {
        const query = await fetch(URL)
        const queryParsed = await query.json()
        const {results} = queryParsed 
        console.log(results)
        setPokemonsArr(results)
        
      }
      catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
    
    getFetchApi()
   
     
   }, [])
   

  return (

    <div>
      <b>Pokemons</b>
    {
      pokemonsArr.map( pokemon => {
        return(
          <div key={pokemon.name}>
              <li>{pokemon.name}</li>
          </div>
        )
      })
      
    }
    </div>

  )
}

export default Pokemons