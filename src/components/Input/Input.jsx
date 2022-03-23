import Titulo from '../Titulo/Titulo'


function Input({placeholder, saludo}) {

    

    return (
        <>
            <Titulo tituloProps = "Mira que Landing tan lindo" subtituloProps = "Abajo hay un input!!" />

            <input placeholder = { placeholder } />

            <button onClick={saludo}>Saludo</button>
            
        </>
    );
}

export default Input