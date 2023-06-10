import { NavLink } from "react-router-dom"
import Button from "../Button/Button";
const NavButton = (props) => {
    return (
        <NavLink to="/login">
            <Button text="Log In"/>
        </NavLink>
    )
}
export default NavButton;