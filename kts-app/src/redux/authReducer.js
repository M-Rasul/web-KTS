import { authAPI } from "../api/api";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_ME = "SET_ME";
const initialState = {
    profile: {
        nickName: "RasQa",
        image: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
        age: 21,
        description: "I'ma cool boy!🤘"
    },
    isAuth: true
}
const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ME:
            return {...state, profile: action.profileInfo, isAuth: true}
        case LOG_IN:
            return {...state, profile: action.profileInfo, isAuth: true};
        case LOG_OUT:
            return {...state, profile: null, isAuth: false};
        default:
            return state;
    }
}
const loginAC = ({nickName, image, age, description}) => ({type: LOG_IN, profileInfo: {nickName, image, age, description}});
const setMeAC = ({nickName, image, age, description}) => ({type: SET_ME, profileInfo: {nickName, image, age, description}});
const logoutAC = () => ({type: LOG_OUT});


export const login = (data) => async (dispatch) => {
    const response = await authAPI.signIn(data);
    dispatch(loginAC(response.data));
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.signOut();
    if(response.status === "Ok") {
        dispatch(logoutAC());
    }
}
export const setMe = () => async (dispatch) => {
    const response = await authAPI.me();
    if(response.status === "Ok") {
        dispatch(setMeAC(response.data));
    }
}
export default authReducer;