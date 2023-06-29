import { useState } from "react";
import downSvg from "../../assets/svg/down.png";
import logoutSvg from "../../assets/svg/logout.png";
import style from "./ProfileName.module.css";
import { useNavigate } from "react-router";
const ProfileName = (props) => {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const onIconClick = function() {
        setModalIsOpen(!modalIsOpen);
    }
    const onLogoutClick = function() {
        props.logout();
        navigate("/login");
    }
    return (
    <div className={`flex_column ${style.flex_column_width}`}>
        <div className={`flex3`}>
            <div className="flex2">
                <img src={props.ava} alt="avatar" className={style.ava} />
                <p>{props.name}</p>
            </div>
            <img src={downSvg} className="icon icon_pointer" onClick={onIconClick} />
        </div>
        {modalIsOpen && (
            <div className={style.dropdown}>
                <div className={`flex2 ${style.flex2_withHover}`} onClick={onLogoutClick}>
                    <img src={logoutSvg} alt="logout" className="icon" />
                    <p className={style.dark}>logout</p>
                </div>
            </div>
        )}
    </div>   
    )
    }
export default ProfileName;