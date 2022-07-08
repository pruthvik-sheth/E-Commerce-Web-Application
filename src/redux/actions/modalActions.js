

const setModalOpen = ({ isOpen = false, product }) => ({
    type: 'SET_MODAL_OPEN',
    isOpen,
    product
})

export default setModalOpen