import { connect } from "react-redux";
import ProfileName from "./ProfileName";
import { logout } from "../../redux/authReducer";
const mapStateToProps = (state) => {
    return {
        ava: state?.auth?.profile?.image,
        name: state?.auth?.profile?.nickname
    };
}
const ProfileNameContainer = connect(mapStateToProps, {logout})(ProfileName);
export default ProfileNameContainer;