import { NavLink } from "react-router-dom";
import "./styles.css";

const Menu = () => {

    return (
        <ul id="menu">
            <li id="listaDos"><NavLink id="anclas" to={"/"}>Inicio</NavLink></li>
            <li id="listaDos"><NavLink id="anclas" to={"/importacion"}>Importacion</NavLink></li>
            <li id="listaDos"><NavLink id="anclas" to={"/exportacion"}>Exportacion</NavLink></li>
            <li id="listaDos"><NavLink id="anclas" to={"/trafico"}>Trafico</NavLink></li>
            <li id="listaDos"><NavLink id="anclas" to={"/Bases"}>Bases</NavLink></li>
        </ul>
    )

}

export default Menu;