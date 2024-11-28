import { NavLink } from "react-router-dom";
import khai from "../../assets/Khai.png";
import "./styles.css";

const NavBar = () => {

    return (
        <nav>
            <NavLink to={"/"}>
                <img src={khai} className="logo" alt="logo" />
            </NavLink>
        </nav>
    )

}

export default NavBar;