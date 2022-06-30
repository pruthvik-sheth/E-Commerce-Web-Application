const initialCartState = []


const cartReducer = (state = initialCartState, action) => {



    switch (action.type) {

        case 'ADD_TO_CART':
            if (action.fromDatabase) {

                return [
                    ...state,
                    {
                        id: action.id,
                        count: action.count
                    }
                ]
            }
            else {
                const foundProduct = state.find(product => product.id === action.id)

                if (foundProduct) {
                    foundProduct.count += 1
                }

                return foundProduct ? [...state] : [...state, { id: action.id, count: 1 }]
            }

        case 'REMOVE_FROM_CART':

            const foundProduct1 = state.find(product => product.id === action.id)

            if (foundProduct1.count !== 1 && !action.fullRemove) {
                foundProduct1.count -= 1

                return [
                    ...state
                ]
            }
            else {
                return [
                    ...state.filter(product => product.id !== action.id)
                ]
            }

        case 'EMPTY_CART':
            return []
        default:
            return state
    }
}

export default cartReducer

