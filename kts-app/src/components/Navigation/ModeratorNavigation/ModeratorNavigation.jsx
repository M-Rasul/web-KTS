import { NavLink } from "react-router-dom"
import style from "./ModeratorNavigation.module.css";
const ModeratorNavigation = (props) => {
    return (
        <nav>
            <ul className={`layout_column ${style.list}`}>
                <li><NavLink to="/queue" className={({ isActive }) => (isActive ? 'link active' : 'link')}>On Queue</NavLink></li>
                <li className={style.link_margin}><NavLink to="/content" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Content</NavLink></li>
            </ul>
        </nav>
    )
}
export default ModeratorNavigation;