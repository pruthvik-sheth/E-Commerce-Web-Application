
const initialProductState = []

const productsReducer = (state = initialProductState, action) => {

    switch (action.type) {

        case 'SET_PRODUCT':
            return [
                ...state,
                action.product
            ]

        default:
            return state
    }

}

export default productsReducer