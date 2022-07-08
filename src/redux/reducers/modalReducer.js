
const initialModalState = {
    isOpen: false,
    product: undefined
}

const modalReducer = (state = initialModalState, action) => {

    switch (action.type) {

        case 'SET_MODAL_OPEN':
            return {
                ...state,
                isOpen: action.isOpen,
                product: action.product
            }

        default:
            return state

    }

}

export default modalReducer