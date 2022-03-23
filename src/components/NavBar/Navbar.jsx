
import CartWidget from '../Carrito/CartWidget';
import './Navbar.css';

const nav = () => {
  console.log()
  return (
  
    <>
      <div className="header-container">
        <nav className="navbar">
          <img
            className="logo"
            src="https://images.vexels.com/media/users/3/230401/isolated/lists/c9e27bacb1dacc48268c59e3b12bb6f8-feliz-planta-de-interior-suculenta-kawaii.png"
          ></img>
          <li className="nav-links">
            <ul><a href='#'>Home</a></ul>
            <ul><a href='#'>Tienda</a></ul>
            <ul><a href='#'>Galeria</a></ul>
            <ul><a href='#'>About us</a></ul>
            <CartWidget/>
          </li>
        </nav>
      </div>
    </>
  );
};

export default nav;

