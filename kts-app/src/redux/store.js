import { applyMiddleware, combineReducers, createStore } from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk';
import { contentReducer } from "./contentReducer";
const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    content: contentReducer
})
const store = createStore(reducers, applyMiddleware(thunk));
export default store;