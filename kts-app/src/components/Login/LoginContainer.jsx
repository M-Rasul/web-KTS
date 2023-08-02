import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../redux/authReducer";

// MAP STATE TO PROPS
const mapStateToProps = (state) => {
    return {
        isLoginFailed: state.auth.isLoginFailed,
    };
};

export const LoginContainer = connect(mapStateToProps, {login})(Login);