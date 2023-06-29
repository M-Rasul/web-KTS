import { authAPI } from "../api/api";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_ME = "SET_ME";
const initialState = {
    profile: {
        nickName: "RasQa",
        image: "https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg?fit=700,467",
        age: 21,
        description: "I'ma cool boy!🤘",
        contentPosted: 14
    },
    isAuth: true,
    token: null,
    role: "user"
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
export const loginAC = (data) => 
({type: LOG_IN, profileInfo: {nickName: data.nickName, image: data.image, age: data.age, description: data.description}});
export const setMeAC = (data) => 
({type: SET_ME, profileInfo: {nickName: data.nickName, image: data.image, age: data.age, description: data.description}});
export const logoutAC = () => ({type: LOG_OUT});


export const login = (userName, password) => (dispatch) => {
    authAPI.signIn(userName, password)
    .then(response => {
        console.log(response);
    });
    // dispatch(loginAC(response.data));
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