

const setProduct = ({ id, title = '', subtitle = '', description = '', amount = 0, discount = 0, category = '', productImage }) => ({

    type: 'SET_PRODUCT',
    product: {
        id,
        title,
        subtitle,
        description,
        amount,
        discount,
        category,
        productImage
    }
})

export default setProduct