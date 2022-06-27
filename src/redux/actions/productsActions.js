

const setProduct = ({ id, title = '', description = '', amount = 0, discount = 0, category = '' }) => ({

    type: 'SET_PRODUCT',
    product: {
        id,
        title,
        description,
        amount,
        discount,
        category
    }
})

export default setProduct