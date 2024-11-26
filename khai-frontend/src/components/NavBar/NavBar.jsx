import { useState } from "react";
import { NavLink } from "react-router-dom";
import khai from "../../assets/Khai.png";
import "./styles.css";

const NavBar = () => {

    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav className="menu">
            <NavLink to={"/"}>
                <img src={khai} className="logo" alt="logo" />
            </NavLink>
        <button onClick={toggleMenu} className="cabeceraBoton">
            <svg className="cabeceraSvg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
        <nav className={`cabeceraNav ${menu ? "isActive" : ""}`}>
            <ul className="cabeceraLista">
                <li className="lista"><NavLink className={"lista"} to={"/"}>Inicio</NavLink></li>
                <li className="lista"><NavLink className={"lista"} to={"/importacion"}>Importacion</NavLink></li>
            </ul>
        </nav>
    </nav>
    )

}

export default NavBar;