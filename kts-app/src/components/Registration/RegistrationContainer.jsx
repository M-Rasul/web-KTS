import { connect } from "react-redux";
import Registration from "./Registration";
import { register } from "../../redux/authReducer";

// MAP STATE TO PROPS
const mapStateToProps = (state) => {
    return {
        isRegistrationFailed: state.auth.isRegistrationFailed,
    };
};

// CONTAINER COMPONENT FOR REGISTRATION
export const RegistrationContainer = connect(mapStateToProps, { register })(Registration);