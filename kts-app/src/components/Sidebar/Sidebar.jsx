import { useSelector } from "react-redux"
import UserNavigation from "../Navigation/UserNavigation/UserNavigation";
import ModeratorNavigation from "../Navigation/ModeratorNavigation/ModeratorNavigation";

const Sidebar = (props) => {
    const role = useSelector(state => state.auth.role);
    return (
    <div className="sidebar">
        {role === "user" && <UserNavigation />}
        {role === "moderator" && <ModeratorNavigation />}
    </div>
    )
}
export default Sidebar;