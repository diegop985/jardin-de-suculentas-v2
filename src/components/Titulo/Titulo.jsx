import './titulo.css'



function Titulo(titleProp) {

    const {tituloProps, subtituloProps} = titleProp

    return (

        <div className="titulo">

            <h1>{tituloProps}</h1>

            <label>{subtituloProps}</label>

        </div>

    )
}

export default Titulo
