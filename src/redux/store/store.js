import { combineReducers, createStore } from "redux";
import authReducer from "../reducers/authReducer";

export default () => {

    const store = createStore(
        combineReducers({
            auth: authReducer
        })
    )

    return store
}