
const initialModalState = {
    isOpen: false,
    productId: null
}

const modalReducer = (state = initialModalState, action) => {

    switch (action.type) {

        case 'SET_MODAL_OPEN':
            return {
                ...state,
                isOpen: action.isOpen,
                productId: action.productId
            }

        default:
            return state

    }

}

export default modalReducer