import { NavLink } from "react-router-dom"
import Button from "../Button/Button";
const NavButton = (props) => {
    return (
        <NavLink to={props.destination}>
            <Button text="Log In"/>
        </NavLink>
    )
}
export default NavButton;