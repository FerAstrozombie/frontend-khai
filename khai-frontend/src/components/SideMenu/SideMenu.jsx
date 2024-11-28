import { NavLink } from "react-router-dom";
import "./styles.css";
import { FcPlus } from "react-icons/fc";
import { FcPrint } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";

const SideMenu = (impo) => {

    return (
        <div className="emojis">
            <h2>{impo? "Importacion Maritima" : "Exportacion maritima"}</h2>
            <NavLink to={"/saveimport"}>
                <FcPlus className="mas"/>
            </NavLink>
            <FcPrint className="mas"/>
            <FcDocument className="mas" />
        </div>
    )

}

export default SideMenu;