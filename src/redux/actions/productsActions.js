

const setProduct = ({ id, title = '', description = '', amount = 0, discount = 0, category = '', imageSrc = '' }) => ({

    type: 'SET_PRODUCT',
    product: {
        id,
        title,
        description,
        amount,
        discount,
        category,
        imageSrc
    }
})

export default setProduct