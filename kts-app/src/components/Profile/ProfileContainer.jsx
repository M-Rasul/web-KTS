import { connect } from "react-redux";
import Profile from "./Profile";
const ProfileContainer = (props) => {
    return <Profile title={props.title} {...props} />
}
const mapStateToProps = (state) => {
    return {
        profile: state.auth.profile
    }
}
export default connect(mapStateToProps, {})(ProfileContainer);