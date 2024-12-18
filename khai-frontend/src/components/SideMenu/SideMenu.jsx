import { NavLink } from "react-router-dom";
import "./styles.css";
import { FcPlus } from "react-icons/fc";
import { FcPrint } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";

const SideMenu = (impo, expo) => {
    
    return (
        <div className="emojis">
            <h2>{impo.impo? "Importacion Maritima" : "Exportacion maritima"}</h2>
            {impo.impo? 
                <NavLink 
                to={"/saveimport"}
                >
                    <FcPlus className="mas"/>
                </NavLink>
            :
                <NavLink 
                to={"/saveexport"}
                >
                    <FcPlus className="mas"/>
                </NavLink>
            }
            <FcPrint className="mas"/>
            <FcDocument className="mas" />
        </div>
    )

}

export default SideMenu;