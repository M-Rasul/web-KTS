import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import style from "./UserNavigation.module.css";
const UserNavigation = (props) => {
    const id = useSelector(state => state.auth.id);
    return (
        <nav>
            <ul className={`layout_column ${style.list}`}>
                <li><NavLink to="/profile" className={({ isActive }) => (isActive ? 'link active' : 'link')}>My Profile</NavLink></li>
                <li className={style.link_margin}><NavLink to="/content" className={({ isActive }) => (isActive ? 'link active' : 'link')} end>Content</NavLink></li>
                <li className={style.link_margin}><NavLink to={{pathname:'/content/my', state: {me: {id: id}}}} className={({ isActive }) => (isActive ? 'link active' : 'link')}>My Content</NavLink></li>
            </ul>
        </nav>
    )
}
export default UserNavigation;