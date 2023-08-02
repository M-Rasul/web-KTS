import { authAPI, usersAPI } from "../api/api";
import { onLoginSuccess, updateToken } from "../api/token";

// ACTION TYPES
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_REGISTRATION_FAILED = "SET_REGISTRATION_FAILED";
const SET_LOGIN_FAILED = "SET_LOGIN_FAILED";


const initialState = {
    profile: null,
    // {
    //     nickName: "RasQa",
        // image: "https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg?fit=700,467",
    //     age: 21,
    //     description: "I'ma cool boy!🤘",
    //     contentPosted: 14
    // },
    isAuth: false,
    role: "user",
    isRegistrationFailed: false,
    isLoginFailed: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state, profile: action.profileInfo, isAuth: true };
        case LOG_OUT:
            return { ...state, profile: null, isAuth: false };
        case SET_REGISTRATION_FAILED:
            return { ...state, isRegistrationFailed: true};
        case SET_LOGIN_FAILED:
            return { ...state, isLoginFailed: true};
        default:
            return state;
    }
}
export const loginAC = (data) =>
({
    type: LOG_IN,
    profileInfo: { nickname: data.nickname, image: data.image, age: data.age, description: data.description, interests: data.interests }
});
export const logoutAC = () => ({ type: LOG_OUT });
export const setRegistrationFailedAC = () => ({type: SET_REGISTRATION_FAILED});
export const setLoginFailedAC = () => ({type: SET_LOGIN_FAILED});


export const login = (email, password, navigate) => (dispatch) => {
    authAPI.signIn(email, password)
        .then(response => {
            if (response.status === 200) {
                onLoginSuccess(response.data.access, response.data.refresh);
                navigate("/");
                usersAPI.getUser(response.data.user_id)
                    .then(response => {
                        dispatch(loginAC(response.data));
                    })
            }
        })
        .catch(error => {
            dispatch(setLoginFailedAC());
        });
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.signOut();
    if (response.status === "Ok") {
        dispatch(logoutAC());
    }
}
export const refreshToken = (refresh) => dispatch => {
    authAPI.refreshToken(refresh)
    .then(response => {
        if(response.status === 200) {
            updateToken(response.data.access);
        }
    })
    .catch(error => {
        dispatch(logoutAC());
    })
};
export const register = (nickname, email, password, image, age, description, navigate) => dispatch => {
    usersAPI.createUser(nickname, email, password, image, age, description)
    .then(response => {
        if(response.status === 201) {
            navigate("/login");
        }
    })
    .catch(error => {
        dispatch(setRegistrationFailedAC());
    })
};


export default authReducer;