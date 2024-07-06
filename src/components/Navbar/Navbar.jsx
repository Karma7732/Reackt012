import esascositas from "../../assets/esascositas.png"
import CartWidget from "../CartWidget/CardWidget"
import "./Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <img className="esascositas" src={esascositas} alt="Logo de la marca" />
        </div>
        <ul className="navbar-links">
            <li className="navbar-item">
                <a href="#">Inicio</a>
            </li>
            <li className="navbar-item">
                <a href="#">Productos</a>
            </li>
            <li className="navbar-item">
                <a href="#">Contacto</a>
            </li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar