

const setModalOpen = ({ isOpen = false, productId }) => ({
    type: 'SET_MODAL_OPEN',
    isOpen,
    productId
})

export default setModalOpen