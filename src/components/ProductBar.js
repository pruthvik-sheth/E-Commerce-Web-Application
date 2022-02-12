const ProductBar = () => {
    return (
        <div className='product_bar'>
            <div className='product_info'>
                <div className='product_info_item'>12</div>
                <div className='product_info_item'>IBSM Followup</div>
                <div className='product_info_item'>Data Source 1</div>
                <div className='product_info_item'>Teste</div>
            </div>
            <div className='product_edit_buttons'>
                <button className="general_button">Edit</button>
                <button className="general_button">Delete</button>
            </div>
        </div>
    )
}

export default ProductBar

