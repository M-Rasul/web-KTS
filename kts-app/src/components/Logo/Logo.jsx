import s from './Logo.module.css'; 
import { NavLink } from 'react-router-dom';
const Logo = (props) => {
    return (
        <NavLink to="/">
            <div className={s.logo}>
                <h1>KTS</h1>
                <span className={s.styled}>Knowledge to Share</span>
            </div>
        </NavLink>
    );
}
export default Logo;