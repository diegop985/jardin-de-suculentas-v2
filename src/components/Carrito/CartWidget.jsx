import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import './carrito.css'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'

library.add(faBagShopping);


function CartWidget() {
    return (
        <div className="carrito">
            <button><FontAwesomeIcon icon="bag-shopping" /></button>
        </div>
    );
}

export default CartWidget;