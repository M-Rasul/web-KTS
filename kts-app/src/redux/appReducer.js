import { authAPI, usersAPI } from "../api/api";
import { login, loginAC, logoutAC, setMe } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";
const initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, initialized: true }
        default:
            return state
    }
}

// ACTION CREATORS
export const setInitializedAC = () => ({ type: SET_INITIALIZED });

// THUNKS
export const setInitialized = (access, navigate, path) => dispatch => {
    authAPI.verifyToken(access)
    .then(response => {
        if(response.status === 200) {
            usersAPI.getUser(response.data.user_id)
            .then(response => {
                if(response.status === 200) {
                    dispatch(loginAC(response.data));
                    dispatch(setInitializedAC());
                }
            })
        }
    })
    .catch(error => {
        if(path !== "/registration") {
            navigate("/login");
        }
        dispatch(logoutAC());
        dispatch(setInitializedAC());
    })
};  

export default appReducer;