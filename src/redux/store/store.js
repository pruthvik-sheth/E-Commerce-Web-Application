import { combineReducers, compose, createStore } from "redux";
import authReducer from "../reducers/authReducer";
import cartReducer from "../reducers/cartReducer";
import filtersReducer from "../reducers/filtersReducer";
import modalReducer from "../reducers/modalReducer";
import productsReducer from "../reducers/productsReducer";
import snackbarReducer from "../reducers/snackbarReducer";


export default () => {

    const store = createStore(
        combineReducers({
            auth: authReducer,
            products: productsReducer,
            filters: filtersReducer,
            snackbar: snackbarReducer,
            cart: cartReducer,
            modal: modalReducer
        }),
        {}
        ,
        compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )

    return store
}