const ProductBar = (props) => {
    return (
        <div className='product_bar'>
            <div className='product_info'>
                <div className='product_info_item'>{props.product.id}</div>
                <div className='product_info_item'>{props.product.title}</div>
                <div className='product_info_item'>{props.product.dataSource}</div>
                <div className='product_info_item'>{props.product.query}</div>
            </div>
            <div className='product_edit_buttons'>
                <button className="general_button">Edit</button>
                <button className="general_button">Delete</button>
            </div>
        </div>
    )
}

export default ProductBar

