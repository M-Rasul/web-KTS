import { setMe } from "./authReducer";

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
    const promise = dispatch(setMe());
    promise.then(() => {
        dispatch(setInitializedAC());
    })
}
export default appReducer;