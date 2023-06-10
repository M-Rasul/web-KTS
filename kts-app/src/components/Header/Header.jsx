import Logo from "../Logo/Logo";
import ProfileNameContainer from "../ProfileName/ProfileNameContainer";
import style from "./Header.module.css";
const Header = (props) => {
    return (
        <div className={style.headerContainer}>
            <Logo />
            <ProfileNameContainer />
        </div>
    )
}
export default Header;