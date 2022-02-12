const ProductCard = (props) => {
    return (
        <div id='product_card'>
            <div className="product_image"></div>

            <div className="product_info_box">
                <div className="product_title">Product Title</div>
                <div className="product_sub_title small_alert">Lorem</div>
                <div className="product_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accus iusto enim reprehenderit amet consectetur.</div>
                <div className="product_discount">
                    <div className="eliminated_price">MRP ₹<span>1000</span></div>
                    <div className="percent_off">20.00% OFF</div>
                </div>
                <div className="product_price">₹ {props.number}</div>
                <button className="general_button">ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductCard