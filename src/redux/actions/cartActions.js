export const addToCart = ({ id, fromDatabase = false, count = 1 }) => ({

    type: 'ADD_TO_CART',
    id,
    fromDatabase,
    count
})

export const removeFromCart = ({ id, fullRemove }) => ({

    type: 'REMOVE_FROM_CART',
    id,
    fullRemove
})

export const emptyCart = () => ({

    type: 'EMPTY_CART'
})