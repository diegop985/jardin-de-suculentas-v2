import './item.css'



function Item({propsItem}) {
    return (
        <div className="item">
            <div className="item-header">
                <h2>{propsItem.name}</h2>
                <span>{propsItem.categoria}</span>
            </div>
            <div className="item-body">
                <div className='item-body__img'>
                    <img className = "img-body" src={propsItem.foto}></img>
                </div>
                <div className='item-body__info'>
                    <span>Precio: {propsItem.price}</span>
                    <span>Cantidad: {propsItem.stock}</span>
                </div>
            </div>
            <div className='item-footer'>

                <button>Ver Producto</button>
            </div>
        </div>
    );
}

export default Item;