import Titulo from '../Titulo/Titulo'


function Input({placeholder, saludo}) {

    

    return (
        <>
            <Titulo tituloProps = "Como fue" subtituloProps = "No sirve" />

            <input placeholder = { placeholder } />

            <button onClick={saludo}>Saludo</button>
        </>
    );
}

export default Input