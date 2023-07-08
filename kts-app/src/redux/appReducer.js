import { login, setMe } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";
const initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state
    }
}
export const setInitializedAC = () => ({type: SET_INITIALIZED});

export const setInitialized = () => 
    (dispatch) => {
    // dispatch(login("rasulmamashev@bk.ru", "madridista77"))
    // .then(() => {
        dispatch(setInitializedAC());
    // })
}
export default appReducer;