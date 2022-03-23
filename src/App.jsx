import ItemListContainer from './containers/ItemListContainer'
import RoutesApp from './containers/RoutesApp'


function App () {

    return (
        <div>
            <RoutesApp/>
            <ItemListContainer propItemList = {"Acá va un item buenísimo"}/>
        </div>
        
    )

}


export default App