import { combineReducers, createStore } from "redux";
import authReducer from "../reducers/authReducer";
import filtersReducer from "../reducers/filtersReducer";
import productsReducer from "../reducers/productsReducer";
import snackbarReducer from "../reducers/snackbarReducer";

export default () => {

    const store = createStore(
        combineReducers({
            auth: authReducer,
            products: productsReducer,
            filters: filtersReducer,
            snackbar: snackbarReducer
        })
    )

    return store
}